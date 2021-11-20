import * as sapper from '@sapper/server';
import fs from 'fs';
import compression from 'compression';
import http from 'http';
import polka from 'polka';
import sirv from 'sirv';
import socketIo from 'socket.io';
import {WebhookClient} from 'discord.js' 
import {herokuDB, webhookId, webhookToken, solution} from "./config.json";
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
import { Client } from 'pg';
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
	//deleteTables()
	//createTables()
	//clearTables()
	//saveLogs()
});

io.on('connection', function(socket){

	socket.on('submit answer', (data, verify) =>{
		var returnResult = {
			isCorrect: false, 
			isFinished: false
		}

		if(!data || !data.answer) {
			verify(returnResult)
			return;
		}

		const cleanAnswer = encodeURI(data.answer.trim().toUpperCase())
		const isCorrect = solution[data.round][data.id] === cleanAnswer 
		returnResult.isCorrect = isCorrect
		const column = isCorrect? 'correct':'incorrect' // for logging
		const answerLogIndex = data.id + 6*data.round // add 5 for round 2
		const messageString = `Round ${data.round+1} Puzzle ${data.id + 1} - ${isCorrect? ':white_check_mark:':':x:' + cleanAnswer}`

		webhook.send(messageString)
		client.query(`UPDATE answerlog SET ${column} = ${column} + 1 WHERE id = ${answerLogIndex}`, (err)=>{
			if(err) throw err
		})
		
		if (isCorrect)
			if((data.round == 0 && data.id == 5) || (data.round == 1 && data.id == 4))
				returnResult.isFinished = true
		verify(returnResult)
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
		var timeString = d.toLocaleString('th-TH')
		let queryString = `INSERT INTO leaderboard${data.round+1} VALUES ('${data.user}', '${data.email}','${timeString}')`
		client.query(queryString, (err, result) => {
			if (err) throw err
		})

		client.query(`SELECT name FROM leaderboard${data.round+1}`, (err, result) => {
			if(err) throw err
			res.ranking = result.rows.length

			webhook.send(`${data.user} :trophy: Round ${data.round+1} Rank ${res.ranking}`)
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
})

function clearTables(){
	client.query(`DELETE FROM leaderboard1`)
	client.query(`DELETE FROM leaderboard2`)
	client.query(`DELETE FROM answerlog`)
}

function deleteTables(){
	client.query(`DROP TABLE leaderboard1`)
	client.query(`DROP TABLE leaderboard2`)
	client.query(`DROP TABLE answerlog`)
}

function createTables(){
	//client.query(`CREATE TABLE leaderboard1 (name VARCHAR, email VARCHAR, time VARCHAR)`)
	//client.query(`CREATE TABLE leaderboard2 (name VARCHAR, email VARCHAR, time VARCHAR)`)
	client.query(`CREATE TABLE answerlog (id NUMERIC, correct NUMERIC, incorrect NUMERIC)`)
	for(var i = 0; i < 11; i ++)
		client.query(`INSERT INTO answerlog VALUES ('${i}', '0','0')`)
}

function saveLogs(){
	client.query(`SELECT * FROM answerlog`, (err, result) =>{
		if(err) throw err;
		fs.writeFile("answerlog.txt", JSON.stringify(result.rows), function(err) {
			if (err) {
				 console.log(err);
			}
	  	});
	})

	client.query(`SELECT * FROM leaderboard2`, (err, result) =>{
		if(err) throw err;
		fs.writeFile("winnerlist.txt", JSON.stringify(result.rows), function(err) {
			if (err) {
				 console.log(err);
			}
	  	});
	})
}