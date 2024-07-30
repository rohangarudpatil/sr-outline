document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const responseMessage = document.getElementById('responseMessage');
    
    const message = messageInput.value.trim();
    
    if (message) {
        // In a real-world application, you would send this message to a server here.
        // For demonstration, we'll just display a confirmation message.
        
        responseMessage.textContent = 'Your message has been sent!';
        responseMessage.style.color = 'green';
        
        // Clear the input field
        messageInput.value = '';
    } else {
        responseMessage.textContent = 'Please enter a message before sending.';
        responseMessage.style.color = 'red';
    }
});
