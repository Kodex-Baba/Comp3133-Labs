// npm install express socket.io nodemon
// to run the app npx nodemon server.js

const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3000
const { Server } = require('socket.io');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})

// associate socket server and app server

const io = new Server(appServer)

io.on('connection', (socket) => {
    console.log(`Client connected. Client ID: ${socket.id}`);

//  handle 'ping' event

    socket.on('ping', (data) => {
        console.log(`Received ping event from client with data: ${data}`)

        socket.emit('hello', {message: `hello from server`})
    })

    socket.on('chat-message', (data) => {
        console.log(`Received chat message from client: ${data}`)

        socket.emit('chat-ack')
    })

    socket.on('send-feedback', (feedback) => {
        console.log(`Received feedback from client: ${JSON.stringify(feedback)}`)

        // group the feedback based on category
        socket.join(feedback.category)

        // emit 'new-policy' event to all the clients in specific category
        // io.to(feedback.category).emit('new-policy',
        //     {message: 'our policy has been updated. Please review'})

        socket.emit('feedback-ack', {message: `Thank you for your feedback on ${feedback.category}`})
    })

    socket.on('disconnect', () => {
        console.log(`Client disconnected. Client ID: ${socket.id}`);
    })
})
