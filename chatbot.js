// 1. The Chatbot HTML (Updated with IDs, scrollable log, and click events)
const chatbotHTML = `
    <div class="chat-overlay-container">
        <button class="chat-toggle-btn" onclick="toggleChat()">
            ✨
        </button>

        <div class="chat-window dark-glass" id="chatWindow">

            <div class="chat-hero-panel">
                <div class="hero-top">
                    <div class="bot-profile">
                        <span class="bot-avatar-mini">🤖</span>
                        <span>Maester Assistant</span>
                    </div>
                    <button class="close-chat-btn" onclick="toggleChat()">×</button>
                </div>

                <div class="hero-center">
                    <span class="hero-label">CURRENT FOCUS</span>
                    <h2 class="hero-main">Benchmarking<br>50+ Models</h2>
                </div>

                <div class="avatar-row">
                    <div class="avatar-circle" style="background: #10b981;">📊</div>
                    <div class="avatar-circle" style="background: #f59e0b;">🧠</div>
                    <div class="avatar-circle" style="background: #ef4444;">💻</div>
                    <div class="avatar-circle" style="background: #3b82f6;">🔍</div>
                    <div class="avatar-circle" style="background: #8b5cf6;">⚡</div>
                </div>
            </div>

            <!-- Added an ID and inline styles to make this section scrollable -->
            <div class="chat-log-panel" id="chatLog" style="overflow-y: auto; max-height: 220px; scroll-behavior: smooth;">
                <div class="log-header">
                    <span>Live Conversation</span>
                </div>

                <!-- Default Welcome Message -->
                <div class="chat-entry">
                    <div class="entry-icon">🤖</div>
                    <div class="entry-content">
                        <h4>Maester Assistant</h4>
                        <p style="color: #fff; font-size: 0.95rem; margin-top: 4px;">Hello! I'm online. Ask me about the latest AI benchmarks.</p>
                        <p style="font-size: 0.7rem; margin-top: 4px;">Just now</p>
                    </div>
                </div>
            </div>

            <div class="chat-action-row">
                <button class="action-icon-btn">⚙️</button>
                <button class="action-icon-btn">🔃</button>
                <!-- Added ID and onkeypress event -->
                <input type="text" id="chatInput" class="chat-input-pill" placeholder="Type a message..." onkeypress="handleKeyPress(event)">
                <!-- Added onclick event -->
                <button class="send-action-btn" onclick="handleSend()">Ask ↑</button>
            </div>

        </div>
    </div>
`;

// 2. Inject the HTML into the bottom of the body
document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// 3. UI Toggle Function
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}

// 4. Handle sending the message
function handleSend() {
    const input = document.getElementById('chatInput');
    const messageText = input.value.trim();
    
    // Don't send if the input is empty
    if (!messageText) return; 

    // Clear the input box
    input.value = '';

    // Add the User's message to the chat
    addMessageToLog('You', '👤', messageText, true);

    // Simulate the Bot "thinking" and replying after 1 second
    setTimeout(() => {
        addMessageToLog(
            'Maester Assistant', 
            '🤖', 
            'I am currently running in demo mode, but soon I will be connected to the API to fetch live benchmark data for you!', 
            false
        );
    }, 1000);
}

// 5. Allow hitting "Enter" to send the message
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleSend();
    }
}

// 6. Core function to construct and append new message bubbles
function addMessageToLog(senderName, icon, text, isUser) {
    const chatLog = document.getElementById('chatLog');
    
    // Get current time formatted (e.g., "10:24 AM")
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create a new div for the message
    const entryDiv = document.createElement('div');
    entryDiv.className = 'chat-entry';
    entryDiv.style.marginTop = '20px'; // Add spacing between messages

    // If it's the user, reverse the layout so it aligns to the right
    if (isUser) {
        entryDiv.style.flexDirection = 'row-reverse';
        entryDiv.style.textAlign = 'right';
    }

    // Build the inner HTML for the message
    entryDiv.innerHTML = `
        <div class="entry-icon" style="background: ${isUser ? '#3b82f6' : 'linear-gradient(135deg, #3b82f6, #a855f7)'};">${icon}</div>
        <div class="entry-content">
            <h4 style="${isUser ? 'color: #3b82f6;' : 'color: white;'}">${senderName}</h4>
            <p style="color: #fff; font-size: 0.95rem; margin-top: 4px;">${text}</p>
            <p style="font-size: 0.7rem; margin-top: 4px;">${timeString}</p>
        </div>
    `;

    // Add it to the log panel
    chatLog.appendChild(entryDiv);

    // Auto-scroll to the bottom so the newest message is always visible
    chatLog.scrollTop = chatLog.scrollHeight;
}