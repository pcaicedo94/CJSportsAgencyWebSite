// ===================================
// METRICS DASHBOARD JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Animate circular gauges and progress bars
    animateMetrics();

    // Add interactive tooltips
    addMetricTooltips();

    // Simulate real-time data updates (optional)
    // simulateDataUpdates();
});

function animateMetrics() {
    // Animate SVG circles
    const progressCircles = document.querySelectorAll('.gauge-progress, .status-ring, .score-progress, .perf-progress');
    
    progressCircles.forEach(circle => {
        const length = circle.getTotalLength();
        circle.style.strokeDasharray = length;
        circle.style.strokeDashoffset = length;

        // Trigger animation
        setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
            const targetOffset = circle.style.strokeDashoffset;
            circle.style.strokeDashoffset = targetOffset || 0;
        }, 300);
    });

    // Animate horizontal bars
    const horizontalBars = document.querySelectorAll('.h-bar-fill');
    horizontalBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = targetWidth;
        }, 500);
    });

    // Animate vertical bars
    const verticalBars = document.querySelectorAll('.bar-fill, .chart-bar-fill');
    verticalBars.forEach((bar, index) => {
        bar.style.opacity = '0';
        bar.style.transform = 'scaleY(0)';
        setTimeout(() => {
            bar.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            bar.style.opacity = '1';
            bar.style.transform = 'scaleY(1)';
        }, 100 * index);
    });

    // Animate stacked segments
    const stackSegments = document.querySelectorAll('.stack-segment');
    stackSegments.forEach((segment, index) => {
        segment.style.opacity = '0';
        setTimeout(() => {
            segment.style.transition = 'opacity 0.5s ease';
            segment.style.opacity = segment.style.opacity || '0.8';
        }, 200 * index);
    });
}

function addMetricTooltips() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#00d9ff';
            this.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(0, 217, 255, 0.3)';
            this.style.boxShadow = 'none';
        });
    });
}

function simulateDataUpdates() {
    // This function could be used to simulate real-time data updates
    // For demonstration purposes only
    setInterval(() => {
        const randomMetrics = document.querySelectorAll('.stat-value, .gauge-value');
        randomMetrics.forEach(metric => {
            const currentValue = parseInt(metric.textContent);
            if (!isNaN(currentValue)) {
                const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
                const newValue = Math.max(0, Math.min(100, currentValue + variation));
                
                // Smooth transition
                metric.style.transition = 'all 0.5s ease';
                metric.textContent = newValue;
            }
        });
    }, 5000); // Update every 5 seconds
}

// Player data management (can be expanded with real data)
const playerData = {
    1: {
        name: "JUAN CAICEDO",
        number: "07",
        position: "STRIKER – WINGER – ATTACKING MIDFIELDER",
        age: 21,
        height: "1.71m",
        nationality: "Colombia",
        foot: "Right",
        potential: 92,
        metrics: {
            energy: 75,
            speed: 125,
            status: 100,
            powerRate: 80
        }
    },
    2: {
        name: "KENNET PINTO",
        number: "09",
        position: "CENTER FORWARD - WINGER",
        age: 21,
        height: "1.73m",
        nationality: "Colombia",
        foot: "Right",
        potential: 88,
        metrics: {
            energy: 82,
            speed: 132,
            status: 95,
            powerRate: 85
        }
    },
    3: {
        name: "SIMON HEDMAN",
        number: "09",
        position: "GOALKEEPER",
        age: 23,
        height: "1.88m",
        nationality: "Sweden",
        foot: "Right",
        potential: 88,
        metrics: {
            energy: 82,
            speed: 132,
            status: 95,
            powerRate: 85
        }
    }
    // Add more players as needed
};

// Load player data dynamically based on URL parameter
function loadPlayerData() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('id');
    
    if (playerId && playerData[playerId]) {
        const player = playerData[playerId];
        
        // Update player information
        document.querySelector('.player-name-large').textContent = player.name;
        document.querySelector('.player-number-large').textContent = player.number;
        document.querySelector('.player-position-large').textContent = player.position;
        
        // Update metrics
        // This would require more complex logic to update all the SVG elements
        console.log('Loaded player data for:', player.name);
    }
}

// Call loadPlayerData when page loads
document.addEventListener('DOMContentLoaded', loadPlayerData);

// Add smooth scroll behavior for back button
document.addEventListener('DOMContentLoaded', function() {
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            // Allow default behavior but add animation
            this.style.transform = 'translateX(-10px)';
            setTimeout(() => {
                this.style.transform = 'translateX(0)';
            }, 200);
        });
    }
});

// Interactive prediction tags
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.4)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});
