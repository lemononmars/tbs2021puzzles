import * as sapper from '@sapper/server';
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
	//showSubmissionLog()
});

io.on('connection', function(socket){
	const solution = [ //super secret
		['READS','UNDER','CELLS','TAKEN','TWICE','ENTER'],
		['NEXTTURN', 'ROLL', 'DRAW', 'PICK'],
		['JUDY', 'MACHIKORO']
	]

	socket.on('submit answer', (data, verify) =>{
		const cleanAnswer = data.answer.trim().toUpperCase()
		const isCorrect = solution[data.round][data.id] === cleanAnswer 
		const column = isCorrect? 'correct':'incorrect' // for logging
		client.query(`UPDATE answerlog SET ${column} = ${column} + 1 WHERE id = ${data.id}`, (err)=>{
			if(err) throw err
		})
		
		var returnResult = {
			isCorrect: isCorrect, 
			isFinished: false
		}
		if (isCorrect)
			if((data.round == 0 && data.id == 5) || data.round == 2)
				returnResult.isFinished = true
		verify(returnResult)
	})

	socket.on('add to leaderboard', (data, callback) =>{
		if(round == 0 && data.answer != solution[0][5] || round == 2 && data.answer != solution[2][0]) {
			callback(false)
			return;
		}

		const d = new Date()
		var timeString = d.toLocaleString('th-TH')
		client.query(`INSERT INTO leaderboard${data.round} VALUES ('${data.user}', '${data.email}','${timeString}')`, function (err) {
			if (err) throw err;
		})
		callback(true)
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
	for(var i = 0; i < 6; i ++)
		client.query(`INSERT INTO answerlog VALUES ('${i}', '0','0')`)
}

function showSubmissionLog(){
	client.query(`SELECT * FROM answerlog`, (err, result) =>{
		if(err) throw err;
		console.log(JSON.stringify(result.rows))
	})
}