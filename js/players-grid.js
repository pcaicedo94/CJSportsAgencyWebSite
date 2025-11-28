// ===================================
// PLAYERS GRID GENERATOR
// Dynamically generates player cards
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const playersGrid = document.getElementById('playersGrid');
    
    if (!playersGrid) return;
    
    // Get all players data
    const players = getAllPlayers();
    
    // Clear existing content
    playersGrid.innerHTML = '';
    
    // Generate cards for each player
    Object.keys(players).forEach(id => {
        const player = players[id];
        const card = createPlayerCard(id, player);
        playersGrid.appendChild(card);
    });
});

function createPlayerCard(id, player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('data-player', id);
    
    card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-content">
            <div class="player-number">${player.number}</div>
            <div class="player-image">
                <div class="player-avatar">
                    <img src="${player.image}" alt="${player.name}">
                    <div class="scan-line"></div>
                    <div class="scan-overlay"></div>
                </div>
            </div>
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <p class="player-position">${player.position}</p>
                <div class="player-stats-preview">
                    <div class="stat-preview">
                        <span class="stat-label">Potential</span>
                        <span class="stat-value">${player.potential}%</span>
                    </div>
                    <div class="stat-preview">
                        <span class="stat-label">Age</span>
                        <span class="stat-value">${player.age}</span>
                    </div>
                </div>
            </div>
            <div class="card-overlay">
                <div class="overlay-content">
                    <p class="player-preview">${player.preview}</p>
                    <button class="btn-view" onclick="window.location.href='player-detail.html?id=${id}'">VIEW PROFILE</button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}
