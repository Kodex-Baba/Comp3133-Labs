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
    emit() - will emit the event ti the server
    emit(event_name, data_for_server)
     */

    const message = "hello from client"
    clientIO.emit('ping', "hello fom client")
    logEvent(`Ping button clicked`);
};


const sendChatMessage = () => {
    logEvent('Chat button clicked');
};

const sendFeedback = () =>{
    const category = document.getElementById('feedback-category').value;
    const userInput = document.getElementById('feedback-message').value;

    logEvent('Feedback button clicked');
};
