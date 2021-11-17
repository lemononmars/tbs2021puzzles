import * as sapper from '@sapper/server';
import fs from 'fs';
import compression from 'compression';
import http from 'http';
import polka from 'polka';
import sirv from 'sirv';
import socketIo from 'socket.io';

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
process.env.DATABASE_URL = 'postgres://dozphbaclsjpzh:75fc623b54e01dd23610b4184c1c149a7c84377cd27a31bb4d583738cb6bcfb5@ec2-35-168-65-132.compute-1.amazonaws.com:5432/d3bo1faurltsbj'
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
	const solution = [ //super secret
		['READS','UNDER','CELLS','TAKEN','TWICE','ENTER'],
		['SKIP', 'ROLL', 'DRAW', 'PICK', 'PRIZE']
	]

	socket.on('submit answer', (data, verify) =>{
		var returnResult = {
			isCorrect: false, 
			isFinished: false
		}

		if(!data || !data.answer) {
			verify(returnResult)
			return;
		}

		const cleanAnswer = data.answer.trim().toUpperCase()
		const isCorrect = solution[data.round][data.id] === cleanAnswer 
		returnResult.isCorrect = isCorrect
		const column = isCorrect? 'correct':'incorrect' // for logging
		const answerLogIndex = data.id + 5*data.round // add 5 for round 2
		client.query(`UPDATE answerlog SET ${column} = ${column} + 1 WHERE id = ${answerLogIndex}`, (err)=>{
			if(err) throw err
		})
		
		if (isCorrect)
			if((data.round == 0 && data.id == 5) || (data.round == 1 && data.id == 4))
				returnResult.isFinished = true
		verify(returnResult)
	})

	socket.on('add to leaderboard', (data, callback) =>{
		var res = {
			success: false,
			ranking: -1
		}
		// check answer one more time to make sure no one tries something funny
		if(data.answer != solution[data.round].slice(-1)[0]) {
			callback(res)
			return;
		}

		res.success = true
		if (!data.email)
			data.email = 'none@gmail.com'
		const d = new Date()
		var timeString = d.toLocaleString('th-TH')
		client.query(`INSERT INTO leaderboard${data.round+1} VALUES ('${data.user}', '${data.email}','${timeString}')`, function (err) {
			if (err) throw err;
		})
		callback(res)
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