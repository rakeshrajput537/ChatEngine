var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
user = [];
connection = [];
console.log('server running on 3000....');
server.listen(process.env.PORT || 3000);
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
	connection.push(socket);
	console.log('Connected: %s users connected', connection.length);

	// Disconnect
 //     socket.on('disconnect', function (data) {
	// users.splice(users.indexOf(socket.username), 1)
	// updateUsernames();
	// connection.splice(connection.indexOf(socket), 1);
	// console.log('Disconnected: %s users disconnected', connection.length);
// });
// send message
socket.on('send message', function(data){
	console.log(data);
	io.sockets.emit('new message',{msg: data});
});

socket.on('new user', function (data, callback) {
	callback(true);
	socket.username = data;

	users.push(socket.username);
	updateUsernames();
});
function updateUsernames(){
	io.sockets.emit('get users',users);
}
 });


