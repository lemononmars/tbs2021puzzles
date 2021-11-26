import * as sapper from '@sapper/server';
import fs from 'fs';
import compression from 'compression';
import http from 'http';
import polka from 'polka';
import sirv from 'sirv';
import socketIo from 'socket.io';

import { Client } from 'pg';
import { WebhookClient } from 'discord.js' 
import {herokuDB, webhookId, webhookToken, solution, keepGoing} from "./config.json";
const webhook = new WebhookClient({id: webhookId, token:webhookToken})

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const server = http.createServer();
 
const app = polka({ server })
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	).listen(PORT, err => {
		if (err) console.log('error', err);
	});

module.exports = app
const io = socketIo(server, {
	cors: {
		origin: PORT,
		methods: ["GET", "POST"],
		transports: ['websocket', 'polling'],
		credentials: true
	},
	allowEIO3: true
});

// heroku postgres sql
process.env.DATABASE_URL = herokuDB
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(function(err){
	if (err) throw err;
	//add command to be execute once
	//resetLogs()
	//saveLogs()
	//resetLeaderboards()
	//populateLeaderboards()
});

io.on('connection', function(socket){

	// discordPurge() // later...

	socket.on('get number active players', (data, callback)=>{
		callback(io.engine.clientsCount)
	})

	socket.on('submit answer', (data, callback) =>{
		var returnResult = {
			isCorrect: false, 
			isFinished: false,
			message: ''
		}

		if(!data || !data.answer) {
			callback(returnResult)
			return;
		}

		const cleanAnswer = encodeURI(data.answer.split(' ').join('').toUpperCase())
		const sol = solution[data.round][data.id]
		const isCorrect = cleanAnswer === sol
		returnResult.isCorrect = isCorrect
		returnResult.message = isCorrect? 'ถูกต้อง!✔️': submissionResponse(cleanAnswer, sol)

		// for discord webhook
		const messageString = `Round ${data.round+1} Puzzle ${data.id + 1} - ${data.alias} > ${isCorrect? ':white_check_mark:':':x:' + cleanAnswer}`
		webhook.send(messageString)

		// db record
		const dbColumn = isCorrect? 'correct':'incorrect' // for logging
		client.query(`UPDATE answerlog SET ${dbColumn} = ${dbColumn} + 1 WHERE (round = ${data.round} AND id = ${data.id})`, (err)=>{
			if(err) throw err
		})
		
		if (isCorrect)
			if((data.round == 0 && data.id == 5) || (data.round == 1 && data.id == 4))
				returnResult.isFinished = true
		callback(returnResult)
	})

	socket.on('add to leaderboard', async (data, callback) =>{
		var res = {
			success: false,
			ranking: -1
		}
		// check answer one more time to make sure no one tries something funny
		if(data.answer != solution[data.round].slice(-1)[0])
			return callback(res)

		data.user = encodeURI(data.user)
		data.email = encodeURI(data.email)
		res.success = true
		const d = new Date()
		var timeString = d.toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })
		let queryString = `INSERT INTO leaderboard${data.round+1} VALUES ('${data.user}', '${data.email}','${timeString}', '${data.timeTotal}')`

		client.query(queryString, (err) => {
			if (err) throw err
		})

		// query to get ranking... is there a way to get this info from INSERT ?
		client.query(`SELECT name FROM leaderboard${data.round+1}`, (err, result) => {
			if(err) throw err
			res.ranking = result.rows.length

			webhook.send(`${data.user} (aka ${data.alias}) Round ${data.round+1} ${data.round===1? ':trophy:':':trophy::trophy:'} Rank ${res.ranking}`)
			callback(res)
		})
	})

	socket.on('verify save', (data, verify) =>{
		if(!data.answers) return
		const s = data.answers.map((ans,i) => ans === solution[data.round][i])
		const a = data.answers.map((ans,i) => ans === solution[data.round][i]? solution[data.round][i]:'')
		verify(s, a)
	})

	socket.on('get leaderboard', (data, callback)=>{
		client.query(`SELECT name, time FROM leaderboard${data}`, (err, result) => {
			if(err) throw err
			callback(result.rows)
		 })
	})

	socket.on('submit rating', (data)=>{
		client.query(`UPDATE answerlog SET fun = fun + ${data.rates[0]}, difficulty = difficulty + ${data.rates[1]}, num = num + 1 WHERE (round = ${data.round} AND id = ${data.puzzleId})`, (err)=>{
			if(err) throw err
		})
	})

	socket.on('submit impression', (data)=>{
		webhook.send(`Final comment: ${data}`)
	})
})

function submissionResponse(ans, sol){
	const found = keepGoing.find((e) => e[0] === ans)
	if (found)
		return '⚠️' + found[1]
		
	// return false if lengths don't match
	if (ans.length != sol.length)
		return 'ยังไม่ถูก ❌'

	// then, check if it's off by one letter
	var count = 0
	for(var i in sol)
		count += ans[i] === sol[i]? 1:0

	if (count == sol.length - 1)
		return '⚠️ ผิดตัวอักษรเดียว ตรวจคำตอบอีกที'
	else
		return 'ยังไม่ถูก ❌'
}

function populateLeaderboards(){
	client.query("INSERT INTO leaderboard1 VALUES ('Nakpaiya', 'kaveewat.roj@gmail.com','23/11/2564 22:18:29','0')")
	client.query("INSERT INTO leaderboard1 VALUES ('NUTLAI', 'nut_lai@hotmail.com','23/11/2564 23:36:45','0')")
	client.query("INSERT INTO leaderboard2 VALUES ('Nakpaiya', 'kaveewat.roj@gmail.com','23/11/2564 22:28:30','0')")
	client.query("INSERT INTO leaderboard2 VALUES ('NUTLAI', 'nut_lai@hotmail.com','24/11/2564 00:58:28','0')")
}

function resetLogs(){
	client.query(`DROP TABLE answerlog`)
	client.query(`CREATE TABLE answerlog (round NUMERIC, id NUMERIC, correct NUMERIC, incorrect NUMERIC, fun NUMERIC, difficulty NUMERIC, num NUMERIC)`)

	const NUM_PUZZ_ROUND_1 = 6
	const NUM_PUZZ_ROUND_2 = 5
	for(var i = 0; i < NUM_PUZZ_ROUND_1; i ++)
		client.query(`INSERT INTO answerlog VALUES ('0', '${i}', '0','0', '0', '0', '0')`)
	for(var i = 0; i < NUM_PUZZ_ROUND_2; i ++)
		client.query(`INSERT INTO answerlog VALUES ('1', '${i}', '0','0', '0', '0', '0')`)
}

function saveLogs(){
	client.query(`SELECT * FROM answerlog`, (err, result) =>{
		console.log(result.rows)
		if(err) throw err;
		fs.writeFile("answerlog.txt", JSON.stringify(result.rows), function(err) {
			if (err) {
				 console.log(err);
			}
	  	});
	})

	client.query(`SELECT * FROM leaderboard1`, (err, result) =>{
		if(err) throw err;
		fs.writeFile("winnerlist1.txt", JSON.stringify(result.rows), function(err) {
			if (err) {
				 console.log(err);
			}
	  	});
	})

	client.query(`SELECT * FROM leaderboard2`, (err, result) =>{
		if(err) throw err;
		fs.writeFile("winnerlist2.txt", JSON.stringify(result.rows), function(err) {
			if (err) {
				 console.log(err);
			}
	  	});
	})
}

function discordPurge(){
	const channel = new Discord.Client()
	channel.fetchMessages({ limit: 100 })
  .then(fetchedMessages => {
    const messagesToDelete = fetchedMessages.filter(msg => (msg.content.includes('frosty_mountain')));
    return channel.bulkDelete(messagesToDelete, true);
  })
  .then(deletedMessages => channel.send(`Deleted **${deletedMessages.size}**`))
}