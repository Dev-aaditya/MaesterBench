// 1. The Chatbot HTML stored as a string (Notice the backtick on the next line!)
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
                        <span>Maester</span>
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

            <div class="chat-log-panel">
                <div class="log-header">
                    <span>Last benchmark</span>
                    <a href="#">View all</a>
                </div>

                <div class="chat-entry">
                    <div class="entry-icon">🤖</div>
                    <div class="entry-content">
                        <h4>Claude 3.5 Sonnet</h4>
                        <p>Reasoning Score • 10:18 AM</p>
                    </div>
                    <div class="entry-value">96%</div>
                </div>
            </div>

            <div class="chat-action-row">
                <button class="action-icon-btn">⚙️</button>
                <button class="action-icon-btn">🔃</button>
                <input type="text" class="chat-input-pill" placeholder="Type Here" >
                <button class="send-action-btn">Ask ↑</button>
            </div>

        </div>
    </div>
`; // -- And the closing backtick here before the semicolon

// 2. Inject the HTML into the bottom of the body
document.body.insertAdjacentHTML('beforeend', chatbotHTML);

// 3. The toggle function to open/close the window
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}