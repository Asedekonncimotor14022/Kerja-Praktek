document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChat = document.getElementById('openChat');
    const closeChat = document.getElementById('closeChat');
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    
    openChat.addEventListener('click', function() {
        chatbotContainer.style.display = 'block';
    });


    closeChat.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });

    //menambahkan pesan ke dalam chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender);
        messageDiv.innerText = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight; 
    }

    // Balasan chatbot
    function getBotResponse(userMessage) {
        if (userMessage.toLowerCase().includes("halo")) {
            return "Halo! Ada yang bisa saya bantu?";
        } else if (userMessage.toLowerCase().includes("pesan")) {
            return "Silakan beri tahu detail pesan Anda.";
        } else {
            return "Maaf, saya tidak mengerti. Coba pertanyaan lain.";
        }
    }

    //tombol "Send" ditekan
    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();

        if (userMessage) {
            addMessage('user', userMessage);

            userInput.value = '';

            //chatbot delay
            setTimeout(function() {
                const botResponse = getBotResponse(userMessage);
                addMessage('bot', botResponse);
            }, 500); 
        }
    });
});
