const { Socket } = require('engine.io');
const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io        = require('socket.io')(server);

const LISTEN_PORT = 8080;

//our routes

app.get('/', function (req,res){
    res.sendFile('index.html', {root:__dirname + '/public'})
});

app.get('/2D', function (req,res){
    res.sendFile(__dirname + '/public/2D.html')
});

app.get('/3D', function (req,res){
    res.sendFile(__dirname + '/public/3D.html')
});

app.get('/2D-vs', function (req,res){
    res.sendFile(__dirname + '/public/2D-vs.html')
});

app.get('/3D-vs', function (req,res){
    res.sendFile(__dirname + '/public/3D-vs.html')
});

//socket.io / websockets stuff
//socket refers to each client that connects 
//listening to events 
io.on('connection', (socket) => { //connection = a default event
    console.log(socket.id + "is connected! Allo!");

    socket.on('disconnect', () => {
        console.log(socket.id + "is disconected. Bye!")

    });

    //our custom websocket events
    //Tic-tac-toe
    socket.on('button1click', ( data) => {
        console.log('button 1 event triggered');
        io.emit('button1_color_change', {r:0, g:255, b:0});
    });

    socket.on('button1dblclick', ( data) => {
        console.log('button 1 event triggered');
        io.emit('button1_color_change', {r:0, g:0, b:255});
    });

    socket.on('button2click', ( data) => {
        console.log('button 2 event triggered');
        io.emit('button2_color_change', {r:0, g:255, b:0});
    });

    socket.on('button2dblclick', ( data) => {
        console.log('button 2 event triggered');
        io.emit('button2_color_change', {r:0, g:0, b:255});
    });

    socket.on('button3click', ( data) => {
        console.log('button 3 event triggered');
        io.emit('button3_color_change', {r:0, g:255, b:0});
    });

    socket.on('button3dblclick', ( data) => {
        console.log('button 3 event triggered');
        io.emit('button3_color_change', {r:0, g:0, b:255});
    });

    socket.on('button4click', ( data) => {
        console.log('button 4 event triggered');
        io.emit('button4_color_change', {r:0, g:255, b:0});
    });

    socket.on('button4dblclick', ( data) => {
        console.log('button 4 event triggered');
        io.emit('button4_color_change', {r:0, g:0, b:255});
    });

    socket.on('button5click', ( data) => {
        console.log('button 5 event triggered');
        io.emit('button5_color_change', {r:0, g:255, b:0});
    });

    socket.on('button5dblclick', ( data) => {
        console.log('button 5 event triggered');
        io.emit('button5_color_change', {r:0, g:0, b:255});
    });

    socket.on('button6click', ( data) => {
        console.log('button 6 event triggered');
        io.emit('button6_color_change', {r:0, g:255, b:0});
    });

    socket.on('button6dblclick', ( data) => {
        console.log('button 6 event triggered');
        io.emit('button6_color_change', {r:0, g:0, b:255});
    });

    socket.on('button7click', ( data) => {
        console.log('button 7 event triggered');
        io.emit('button7_color_change', {r:0, g:255, b:0});
    });

    socket.on('button7dblclick', ( data) => {
        console.log('button 7 event triggered');
        io.emit('button7_color_change', {r:0, g:0, b:255});
    });

    socket.on('button8click', ( data) => {
        console.log('button 8 event triggered');
        io.emit('button8_color_change', {r:0, g:255, b:0});
    });

    socket.on('button8dblclick', ( data) => {
        console.log('button 8 event triggered');
        io.emit('button8_color_change', {r:0, g:0, b:255});
    });

    socket.on('button9click', ( data) => {
        console.log('button 9 event triggered');
        io.emit('button9_color_change', {r:0, g:255, b:0});
    });

    socket.on('button9dblclick', ( data) => {
        console.log('button 9 event triggered');
        io.emit('button9_color_change', {r:0, g:0, b:255});
    });

    //minesweep

    //row 1
    socket.on('box1click', ( data) => {
        console.log('box 1 event triggered');
        io.emit('box1_color_change', {r:192, g:192, b:192});
    });

    socket.on('box2click', ( data) => {
        console.log('box 2 event triggered');
        io.emit('box2_color_change', {r:192, g:192, b:192});
    });

    socket.on('box3click', ( data) => {
        console.log('box 3 event triggered');
        io.emit('box3_color_change', {r:192, g:192, b:192});
    });

    socket.on('box4click', ( data) => {
        console.log('box 4 event triggered');
        io.emit('box4_color_change', {r:192, g:192, b:192});
    });

    socket.on('box5click', ( data) => {
        console.log('box 5 event triggered');
        io.emit('box5_color_change', {r:192, g:192, b:192});
    });

    socket.on('box6click', ( data) => {
        console.log('box 6 event triggered');
        io.emit('box6_color_change', {r:255, g:0, b:0});
    });

    //row 2
    socket.on('box7click', ( data) => {
        console.log('box 7 event triggered');
        io.emit('box7_color_change', {r:255, g:0, b:0});
    });

    socket.on('box8click', ( data) => {
        console.log('box 8 event triggered');
        io.emit('box8_color_change', {r:192, g:192, b:192});
    });

    socket.on('box9click', ( data) => {
        console.log('box 9 event triggered');
        io.emit('box9_color_change', {r:192, g:192, b:192});
    });

    socket.on('box10click', ( data) => {
        console.log('box 10 event triggered');
        io.emit('box10_color_change', {r:192, g:192, b:192});
    });

    socket.on('box11click', ( data) => {
        console.log('box 11 event triggered');
        io.emit('box11_color_change', {r:192, g:192, b:192});
    });

    socket.on('box12click', ( data) => {
        console.log('box 12 event triggered');
        io.emit('box12_color_change', {r:192, g:192, b:192});
    });

    //row 3
    socket.on('box13click', ( data) => {
        console.log('box 13 event triggered');
        io.emit('box13_color_change', {r:192, g:192, b:192});
    });

    socket.on('box14click', ( data) => {
        console.log('box 14 event triggered');
        io.emit('box14_color_change', {r:192, g:192, b:192});
    });

    socket.on('box15click', ( data) => {
        console.log('box 15 event triggered');
        io.emit('box15_color_change', {r:0, g:0, b:0});
    });

    socket.on('box16click', ( data) => {
        console.log('box 16 event triggered');
        io.emit('box16_color_change', {r:192, g:192, b:192});
    });

    socket.on('box17click', ( data) => {
        console.log('box 17 event triggered');
        io.emit('box17_color_change', {r:192, g:192, b:192});
    });

    socket.on('box18click', ( data) => {
        console.log('box 18 event triggered');
        io.emit('box18_color_change', {r:192, g:192, b:192});
    });

    //row 4
    socket.on('box19click', ( data) => {
        console.log('box 19 event triggered');
        io.emit('box19_color_change', {r:0, g:0, b:0});
    });

    socket.on('box20click', ( data) => {
        console.log('box 20 event triggered');
        io.emit('box20_color_change', {r:192, g:192, b:192});
    });

    socket.on('box21click', ( data) => {
        console.log('box 21 event triggered');
        io.emit('box21_color_change', {r:255, g:0, b:0});
    });

    socket.on('box22click', ( data) => {
        console.log('box 22 event triggered');
        io.emit('box22_color_change', {r:192, g:192, b:192});
    });

    socket.on('box23click', ( data) => {
        console.log('box 23 event triggered');
        io.emit('box23_color_change', {r:255, g:0, b:0});
    });

    socket.on('box24click', ( data) => {
        console.log('box 24 event triggered');
        io.emit('box24_color_change', {r:192, g:192, b:192});
    });

    //row 5
    socket.on('box25click', ( data) => {
        console.log('box 25 event triggered');
        io.emit('box25_color_change', {r:192, g:192, b:192});
    });

    socket.on('box26click', ( data) => {
        console.log('box 26 event triggered');
        io.emit('box26_color_change', {r:192, g:192, b:192});
    });

    socket.on('box27click', ( data) => {
        console.log('box 27 event triggered');
        io.emit('box27_color_change', {r:192, g:192, b:192});
    });

    socket.on('box28click', ( data) => {
        console.log('box 29 event triggered');
        io.emit('box28_color_change', {r:192, g:192, b:192});
    });

    socket.on('box29click', ( data) => {
        console.log('box 29 event triggered');
        io.emit('box29_color_change', {r:192, g:192, b:192});
    });

    socket.on('box30click', ( data) => {
        console.log('box 30 event triggered');
        io.emit('box30_color_change', {r:192, g:192, b:192});
    });

});

//set middleware 
//what you want node to do to your request before you respond / send it back node
app.use(express.static(__dirname + '/public'));

//start server
server.listen(LISTEN_PORT);
console.log('Listen to port: ' + LISTEN_PORT);


