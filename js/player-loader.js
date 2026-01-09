// ===================================
// PLAYER DETAIL PAGE LOADER
// Dynamically loads player data
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Get player ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('id') || '1';
    
    // Load player data
    const player = getPlayerData(playerId);
    
    if (!player) {
        // Redirect to players page if player not found
        window.location.href = 'players.html';
        return;
    }
    
    // Populate player header
    populatePlayerHeader(player);
    
    // Populate video highlights
    populateVideoHighlights(player);
    
    // Populate metrics dashboard
    populateMetrics(player);
    
    // Populate AI prediction section
    populateAIPrediction(player);
});

function populatePlayerHeader(player) {
    // Update avatar image
    const avatarImg = document.querySelector('.player-avatar-large img');
    if (avatarImg) {
        avatarImg.src = player.image;
        avatarImg.alt = player.name;
    }
    
    // Update player number (hide for boxers)
    const playerNumber = document.querySelector('.player-number-large');
    if (playerNumber) {
        if (player.sport === 'boxing') {
            playerNumber.style.display = 'none';
        } else {
            playerNumber.textContent = player.number;
            playerNumber.style.display = 'block';
        }
    }
    
    // Update player name
    const playerName = document.querySelector('.player-name-large');
    if (playerName) {
        playerName.textContent = player.name;
    }
    
    // Update position
    const playerPosition = document.querySelector('.player-position-large');
    if (playerPosition) {
        playerPosition.textContent = player.position;
    }
    
    // Update basic info dynamically based on sport
    const basicInfoContainer = document.querySelector('.player-basic-info');
    if (basicInfoContainer) {
        basicInfoContainer.innerHTML = generateBasicInfo(player);
    }
    
    // Update page title
    document.title = `${player.name} | CJ Sports Agency`;
}

function generateBasicInfo(player) {
    let html = '';
    
    // Common fields for all sports
    html += `
        <div class="info-item">
            <span class="info-label">Age</span>
            <span class="info-value">${player.age}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Height</span>
            <span class="info-value">${player.height}</span>
        </div>
    `;
    
    // Sport-specific fields
    if (player.sport === 'football') {
        html += `
            <div class="info-item">
                <span class="info-label">Nationality</span>
                <span class="info-value">${player.nationality}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Foot</span>
                <span class="info-value">${player.foot}</span>
            </div>
        `;
        if (player.instagram) {
            html += `
                <div class="info-item">
                    <a href="${player.instagram}" target="_blank" rel="noopener noreferrer" class="instagram-link" title="Follow on Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            `;
        }
    } else if (player.sport === 'basketball') {
        html += `
            <div class="info-item">
                <span class="info-label">Wingspan</span>
                <span class="info-value">${player.wingspan || 'N/A'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Nationality</span>
                <span class="info-value">${player.nationality}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Hand</span>
                <span class="info-value">${player.hand}</span>
            </div>
        `;
        if (player.instagram) {
            html += `
                <div class="info-item">
                    <a href="${player.instagram}" target="_blank" rel="noopener noreferrer" class="instagram-link" title="Follow on Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            `;
        }
    } else if (player.sport === 'boxing') {
        html += `
            <div class="info-item">
                <span class="info-label">Weight Class</span>
                <span class="info-value">${player.weightClass || player.position}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Reach</span>
                <span class="info-value">${player.reach || 'N/A'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Nationality</span>
                <span class="info-value">${player.nationality}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Hand</span>
                <span class="info-value">${player.hand}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Stance</span>
                <span class="info-value">${player.stance || 'Orthodox'}</span>
            </div>
        `;
        if (player.instagram) {
            html += `
                <div class="info-item">
                    <a href="${player.instagram}" target="_blank" rel="noopener noreferrer" class="instagram-link" title="Follow on Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            `;
        }
    }
    
    return html;
}

function populateVideoHighlights(player) {
    // Update video iframe
    const videoIframe = document.getElementById('playerVideo');
    if (videoIframe && player.videoUrl) {
        videoIframe.src = player.videoUrl;
    }
}

function populateMetrics(player) {
    const metrics = player.metrics;
    
    // Energy gauge
    const energyValue = document.querySelector('.gauge-value');
    const energyProgress = document.querySelector('.gauge-progress');
    if (energyValue && energyProgress) {
        energyValue.textContent = metrics.energy;
        const circumference = 2 * Math.PI * 80;
        const offset = circumference - (metrics.energy / 100) * circumference;
        energyProgress.style.strokeDashoffset = offset;
    }
    
    // Max speed (or punching speed for boxers)
    const speedValue = document.querySelector('.speedo-value');
    const speedProgress = document.querySelector('.speedo-progress');
    if (speedValue && speedProgress) {
        const speed = metrics.maxSpeed || metrics.maxPunchingSpeed;
        const isBoxer = metrics.maxPunchingSpeed !== undefined;
        
        // Update label for boxers - select the title within the speedometer card
        if (isBoxer) {
            const speedTitle = document.querySelector('.speedometer').closest('.metric-card').querySelector('.metric-title');
            if (speedTitle) {
                speedTitle.textContent = 'MAX PUNCHING SPEED';
            }
        }
        
        speedValue.textContent = speed;
        // Adjust range based on metric type
        const minRange = isBoxer ? 30 : 15;
        const maxRange = isBoxer ? 60 : 35;
        const speedPercent = (speed - minRange) / (maxRange - minRange);
        const speedDasharray = 220;
        const speedOffset = speedDasharray - (speedPercent * speedDasharray);
        speedProgress.style.strokeDashoffset = Math.max(0, speedOffset);
    }
    
    // Status
    const statusValue = document.querySelector('.status-value');
    if (statusValue) {
        statusValue.textContent = `${metrics.status}%`;
    }
    
    // Engine rate bars
    const engineBars = document.querySelectorAll('.bar-item');
    if (engineBars.length === metrics.engineRate.length) {
        engineBars.forEach((bar, index) => {
            bar.style.height = `${metrics.engineRate[index]}%`;
        });
    }
    
    // Power rate
    const powerBars = document.querySelectorAll('.h-bar-fill');
    if (powerBars.length === metrics.powerRate.length) {
        powerBars.forEach((bar, index) => {
            bar.style.width = `${metrics.powerRate[index]}%`;
        });
    }
    
    const powerPercentage = document.querySelector('.power-percentage');
    if (powerPercentage) {
        powerPercentage.textContent = `${metrics.powerPercentage}%`;
    }
    
    // Match data
    const chartBars = document.querySelectorAll('.chart-bar');
    if (chartBars.length === metrics.matchData.length) {
        chartBars.forEach((bar, index) => {
            bar.style.height = `${metrics.matchData[index]}%`;
        });
    }
    
    // Performance circles
    const perfCircles = document.querySelectorAll('.perf-circle');
    if (perfCircles.length === metrics.performance.length) {
        perfCircles.forEach((circle, index) => {
            const value = metrics.performance[index];
            const perfText = circle.querySelector('.perf-text');
            const perfProgress = circle.querySelector('.perf-progress');
            
            if (perfText) {
                perfText.textContent = `${value}%`;
            }
            
            if (perfProgress) {
                const circumference = 2 * Math.PI * 40;
                const offset = circumference - (value / 100) * circumference;
                perfProgress.style.strokeDashoffset = offset;
            }
        });
    }
}

function populateAIPrediction(player) {
    // Update potential rating
    const scoreValue = document.querySelector('.score-value');
    const scoreProgress = document.querySelector('.score-progress');
    
    if (scoreValue) {
        scoreValue.textContent = player.potential;
    }
    
    if (scoreProgress) {
        const circumference = 2 * Math.PI * 85;
        const offset = circumference - (player.potential / 100) * circumference;
        scoreProgress.style.strokeDashoffset = offset;
    }
    
    // Update insights
    const insightsList = document.querySelector('.prediction-details ul');
    if (insightsList && player.insights) {
        insightsList.innerHTML = player.insights
            .map(insight => `<li>${insight}</li>`)
            .join('');
    }
    
    // Update tags
    const tagsContainer = document.querySelector('.prediction-tags');
    if (tagsContainer && player.tags) {
        tagsContainer.innerHTML = player.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');
    }
}
