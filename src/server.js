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
const { Client } = require('pg');
process.env.DATABASE_URL = 'postgres://dozphbaclsjpzh:75fc623b54e01dd23610b4184c1c149a7c84377cd27a31bb4d583738cb6bcfb5@ec2-35-168-65-132.compute-1.amazonaws.com:5432/d3bo1faurltsbj'
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(function(err){
	if (err) throw err;
	//client.query(`DELETE FROM leaderboard1`) //clear
	//client.query(`DELETE FROM leaderboard2`) //debug
});

io.on('connection', function(socket){
	const solutions = ['READ','UNDER','LETTERS','USED','TWICE','ENTER'] //super secret

	socket.on('submit answer', (data, verify) =>{
		const cleanAnswer = data.answer.trim().toUpperCase()
		const isCorrect = solutions[data.id] === cleanAnswer 
		const column = isCorrect? 'correct':'incorrect'
		client.query(`UPDATE answerlog SET ${column} = ${column} + 1 WHERE id = ${data.id}`)
		
		var res = {isCorrect: isCorrect, rank: -1}
		if (isCorrect && data.id == 5 || data.id == 10){
			const d = new Date()
			var timeString = d.toLocaleString('th-TH')

			if(data.id == 5){
				client.query(`INSERT INTO leaderboard1 VALUES ('${data.user}', '${data.email}','${timeString}')`, function (err, result) {
					if (err) throw err;
					res[rank] = result.insertId + 1
				})
			}
			if(data.id == 10){
				client.query(`INSERT INTO leaderboard2 VALUES ('${data.user}', '${data.email}','${timeString}')`, function (err, result) {
					if (err) throw err;
					res[rank] = result.insertId + 1
				})
			}
		}	
		verify(res)
	})

	socket.on('verify save', (data, verify) =>{
		const s = data.map((ans,i) => ans === solutions[i])
		const a = data.map((ans,i) => ans === solutions[i]? solutions[i]:'')
		verify(s, a)
	})

	socket.on('get leaderboard', (data, callback)=>{
		client.query(`SELECT name, time FROM leaderboard${data}`, (err, result) => {
			if(err) throw err
			callback(result.rows)
		 })
	})
})