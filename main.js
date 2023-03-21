document.addEventListener('DOMContentLoaded', function() {
    // Find buttons on the home page
    const buttonPageBtn = document.getElementById('buttonPageBtn');
    const chatGptPageBtn = document.getElementById('chatGptPageBtn');

    // Navigate to the corresponding pages
    if (buttonPageBtn) {
        buttonPageBtn.addEventListener('click', function() {
            window.location.href = 'chat.html';
        });
    }

    if (chatGptPageBtn) {
        chatGptPageBtn.addEventListener('click', function() {
            window.location.href = 'chat.html';
        });
    }

    // Chat GPT API integration
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
        // Implement Chat GPT API code here
    }
});


