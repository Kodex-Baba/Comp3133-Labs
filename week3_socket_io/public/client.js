const clientIO = io();

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

const sendPing = () => {
    logEvent(`Ping button clicked`);

    /*

    emit() - will emit the event to the server
    emit(event_name, data_for_server)

     */

    const message = "hello from client"
    clientIO.emit('ping', "hello from client")
    logEvent(`Sent: ping event emitted with message "${message}"`);
};

const sendChatMessage = () => {

    const message = document.getElementById('message-input').value
    if (message.trim()) {
        clientIO.emit('chat-message', message)
        logEvent(`Sent: ${message}`);
    }else{
        logEvent(`Message is empty`);
    }
};

const sendFeedback = () =>{
    const category = document.getElementById('feedback-category').value;
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date: new Date(),
        user: clientIO.id,
        category: category,
        userInput: userInput,
    }

    clientIO.emit('send-feedback', feedback)

    logEvent(`Feedback sent to server: ${JSON.stringify(feedback)}`);
};

clientIO.on('hello', (response) => {
    logEvent(`Ping Successful. Server responded with: "${response.message}"`);
})

clientIO.on('chat-ack', () => {
    alert("Message Delivered");
})

clientIO.on('feedback-ack', (response) => {
    alert(`${response.message}`);
})