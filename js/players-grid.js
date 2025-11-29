// ===================================
// PLAYERS GRID GENERATOR
// Dynamically generates player cards by sport
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const playersGrid = document.getElementById('playersGrid');
    
    if (!playersGrid) return;
    
    // Clear existing content
    playersGrid.innerHTML = '';
    
    // Get all sports
    const sports = getAllSports();
    const sportLabels = {
        'football': 'FOOTBALL',
        'basketball': 'BASKETBALL',
        'boxing': 'BOXING'
    };
    
    const sportIcons = {
        'football': 'fa-futbol',
        'basketball': 'fa-basketball-ball',
        'boxing': 'fa-hand-fist'
    };
    
    // Create section for each sport
    sports.forEach(sport => {
        // Create sport section
        const section = document.createElement('div');
        section.className = 'sport-section';
        
        // Create section header
        const header = document.createElement('div');
        header.className = 'sport-header';
        header.innerHTML = `
            <i class="fas ${sportIcons[sport] || 'fa-trophy'}"></i>
            <h2>${sportLabels[sport] || sport.toUpperCase()}</h2>
            <div class="header-line"></div>
        `;
        section.appendChild(header);
        
        // Create grid for this sport
        const grid = document.createElement('div');
        grid.className = 'players-grid-section';
        
        // Get players for this sport
        const sportPlayers = getPlayersBySport(sport);
        
        // Generate cards for each player
        Object.keys(sportPlayers).forEach(id => {
            const player = sportPlayers[id];
            const card = createPlayerCard(id, player);
            grid.appendChild(card);
        });
        
        section.appendChild(grid);
        playersGrid.appendChild(section);
    });
});

function createPlayerCard(id, player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('data-player', id);
    
    // Only show number for sports that use it (not boxing)
    const numberHtml = player.number && player.sport !== 'boxing' 
        ? `<div class="player-number">${player.number}</div>` 
        : '';
    
    card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-content">
            ${numberHtml}
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
