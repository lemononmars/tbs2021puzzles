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

//export default app
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

io.on('connection', function(socket){
	const solutions = ['READ','UNDER','LETTERS','USED','TWICE','ENTER']

	socket.on('submit answer', (data, verify) =>{
		verify(solutions[data.id] === data.answer.trim().toUpperCase())
	})

	socket.on('verify save', (data, verify) =>{
		const s = data.map((ans,i) => ans === solutions[i])
		const a = data.map((ans,i) => ans === solutions[i]? solutions[i]:'')
		verify(s, a)
	})
})