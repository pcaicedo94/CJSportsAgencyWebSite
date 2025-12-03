// ===================================
// CHATBOT COMPONENT
// Handles chat interface and n8n integration
// ===================================

class Chatbot {
    constructor(config = {}) {
        // Configuration
        this.webhookUrl = config.webhookUrl || 'https://cjsports.app.n8n.cloud/webhook/athlete-interview';
        this.botName = config.botName || 'CJ Assistant';
        this.botStatus = config.botStatus || 'AI Agent';
        
        // State
        this.isOpen = false;
        this.isTyping = false;
        this.sessionId = this.generateSessionId();
        
        // Initialize
        this.init();
    }
    
    init() {
        this.createChatbot();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }
    
    createChatbot() {
        // Create chat bubble
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.id = 'chatBubble';
        bubble.innerHTML = '<i class="fas fa-comments"></i>';
        document.body.appendChild(bubble);
        
        // Create chat container
        const container = document.createElement('div');
        container.className = 'chat-container';
        container.id = 'chatContainer';
        container.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="chat-title">
                        <h3>${this.botName}</h3>
                        <span>${this.botStatus}</span>
                    </div>
                </div>
                <button class="chat-close" id="chatClose">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <div class="welcome-message">
                    <i class="fas fa-robot"></i>
                    <h4>Welcome to CJ Sports Agency!</h4>
                    <p>Hi! I'm your AI assistant. Ask me about our players, services, or anything else!</p>
                </div>
            </div>
            
            <div class="typing-indicator" id="typingIndicator">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
            
            <div class="error-message" id="errorMessage">
                Failed to send message. Please try again.
            </div>
            
            <div class="chat-input-container">
                <div class="chat-input-wrapper">
                    <input 
                        type="text" 
                        class="chat-input" 
                        id="chatInput" 
                        placeholder="Type your message..."
                        autocomplete="off"
                    >
                    <button class="chat-send-btn" id="chatSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(container);
        
        // Store references
        this.bubble = bubble;
        this.container = container;
        this.messagesContainer = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSend');
        this.closeBtn = document.getElementById('chatClose');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
    }
    
    attachEventListeners() {
        // Toggle chat
        this.bubble.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.toggleChat());
        
        // Send message
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Auto-resize input
        this.input.addEventListener('input', () => {
            this.sendBtn.disabled = !this.input.value.trim();
        });
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        this.container.classList.toggle('open', this.isOpen);
        this.bubble.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            this.input.focus();
            this.bubble.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.bubble.innerHTML = '<i class="fas fa-comments"></i>';
        }
    }
    
    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear input
        this.input.value = '';
        this.sendBtn.disabled = true;
        
        // Hide error message
        this.errorMessage.classList.remove('active');
        
        // Show typing indicator
        this.showTyping();
        
        try {
            // Send to n8n webhook
            const response = await this.sendToWebhook(message);
            
            // Hide typing indicator
            this.hideTyping();
            
            // Add bot response
            if (response && response.message) {
                this.addMessage(response.message, 'bot');
            } else {
                this.addMessage('Thanks for your message! Our team will get back to you soon.', 'bot');
            }
        } catch (error) {
            console.error('Chatbot error:', error);
            this.hideTyping();
            this.showError();
            this.addMessage('Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.', 'bot');
        }
    }
    
    async sendToWebhook(message) {
        const payload = {
            message: message,
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            userAgent: navigator.userAgent
        };
        
        const response = await fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' 
            ? '<i class="fas fa-robot"></i>' 
            : '<i class="fas fa-user"></i>';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = text;
        
        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = this.getCurrentTime();
        bubble.appendChild(time);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(bubble);
        
        // Remove welcome message if it exists
        const welcomeMsg = this.messagesContainer.querySelector('.welcome-message');
        if (welcomeMsg) {
            welcomeMsg.remove();
        }
        
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    showTyping() {
        this.isTyping = true;
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }
    
    hideTyping() {
        this.isTyping = false;
        this.typingIndicator.classList.remove('active');
    }
    
    showError() {
        this.errorMessage.classList.add('active');
        setTimeout(() => {
            this.errorMessage.classList.remove('active');
        }, 5000);
    }
    
    showWelcomeMessage() {
        // Welcome message is already in HTML
    }
    
    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    }
    
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Public method to update webhook URL
    setWebhookUrl(url) {
        this.webhookUrl = url;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with your n8n webhook URL
    window.chatbot = new Chatbot({
        webhookUrl: 'https://your-n8n-instance.com/webhook/chat', // Replace with your n8n webhook URL
        botName: 'CJ Assistant',
        botStatus: 'AI Agent'
    });
});
