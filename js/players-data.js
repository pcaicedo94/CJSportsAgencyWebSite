// ===================================
// PLAYERS DATA
// Central data source for all players
// ===================================

const playersData = {
    1: {
        number: "07",
        name: "JUAN CAICEDO",
        position: "STRIKER – WINGER – ATTACKING MIDFIELDER",
        image: "../images/1a.png",
        age: 21,
        height: "1.71m",
        nationality: "Colombia",
        foot: "Right",
        potential: 92,
        preview: "Advanced playmaker with exceptional vision and technical skills",
        metrics: {
            energy: 75,
            maxSpeed: 125,
            status: 100,
            engineRate: [80, 60, 45, 30],
            powerRate: [80, 65, 90],
            powerPercentage: 80,
            matchData: [70, 85, 60, 95],
            performance: [50, 75, 100]
        },
        insights: [
            "Exceptional vision and passing accuracy (94% success rate)",
            "Advanced tactical awareness beyond current age group",
            "Consistent performance under high-pressure situations",
            "Projected professional debut within 18-24 months",
            "Strong leadership qualities and team collaboration"
        ],
        tags: ["Technical Excellence", "High Football IQ", "Leadership", "Consistency"]
    },
    2: {
        number: "09",
        name: "KENNET PINTO",
        position: "CENTER FORWARD - WINGER",
        image: "../images/2.jpeg",
        age: 21,
        height: "1.73m",
        nationality: "Colombia",
        foot: "Right",
        potential: 88,
        preview: "Clinical finisher with impressive pace and positioning",
        metrics: {
            energy: 82,
            maxSpeed: 132,
            status: 95,
            engineRate: [85, 70, 55, 40],
            powerRate: [85, 70, 95],
            powerPercentage: 85,
            matchData: [75, 90, 65, 88],
            performance: [60, 80, 95]
        },
        insights: [
            "Outstanding finishing ability with both feet",
            "Explosive acceleration and top speed",
            "Excellent positioning in the penalty area",
            "Natural goal-scoring instinct",
            "Physical strength combined with technical skill"
        ],
        tags: ["Goal Scorer", "Speed", "Positioning", "Physical"]
    },
    3: {
        number: "03",
        name: "SIMON HEDMAN",
        position: "GOALKEEPER",
        image: "../images/3.jpeg",
        age: 21,
        height: "1.88m",
        nationality: "Sweden",
        foot: "Right",
        potential: 85,
        preview: "Dominant center-back with excellent aerial ability",
        metrics: {
            energy: 70,
            maxSpeed: 115,
            status: 100,
            engineRate: [75, 65, 50, 35],
            powerRate: [90, 75, 85],
            powerPercentage: 85,
            matchData: [80, 75, 70, 85],
            performance: [70, 85, 90]
        },
        insights: [
            "Commanding presence in defensive situations",
            "Exceptional aerial duels win rate (89%)",
            "Strong positional awareness and reading of the game",
            "Leadership qualities on and off the pitch",
            "Comfortable playing out from the back"
        ],
        tags: ["Defensive", "Aerial", "Leadership", "Positioning"]
    },
    4: {
        number: "11",
        name: "RAFAEL COSTA",
        position: "WINGER",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop",
        age: 18,
        height: "1.75m",
        nationality: "Brazil",
        foot: "Left",
        potential: 90,
        preview: "Explosive winger with incredible dribbling skills",
        metrics: {
            energy: 88,
            maxSpeed: 135,
            status: 98,
            engineRate: [90, 75, 60, 45],
            powerRate: [75, 85, 80],
            powerPercentage: 80,
            matchData: [85, 92, 78, 90],
            performance: [55, 78, 92]
        },
        insights: [
            "Electrifying pace and acceleration",
            "Exceptional 1v1 dribbling ability",
            "Creative flair and unpredictability",
            "High work rate on both offense and defense",
            "Rapid development trajectory"
        ],
        tags: ["Speed", "Dribbling", "Creativity", "Young Talent"]
    },
    5: {
        number: "01",
        name: "ANDRE SANTOS",
        position: "GOALKEEPER",
        image: "https://images.unsplash.com/photo-1611627775134-4e3a0f9b7d4c?w=400&h=400&fit=crop",
        age: 20,
        height: "1.92m",
        nationality: "Portugal",
        foot: "Right",
        potential: 87,
        preview: "Commanding goalkeeper with exceptional reflexes",
        metrics: {
            energy: 65,
            maxSpeed: 95,
            status: 100,
            engineRate: [70, 55, 45, 30],
            powerRate: [85, 80, 75],
            powerPercentage: 80,
            matchData: [88, 85, 90, 87],
            performance: [75, 85, 95]
        },
        insights: [
            "Outstanding shot-stopping ability",
            "Excellent command of the penalty area",
            "Strong distribution with both feet",
            "Calm under pressure situations",
            "Improving decision-making on crosses"
        ],
        tags: ["Reflexes", "Command", "Distribution", "Consistency"]
    },
    6: {
        number: "06",
        name: "THOMAS WRIGHT",
        position: "MIDFIELDER",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
        age: 19,
        height: "1.80m",
        nationality: "USA",
        foot: "Right",
        potential: 89,
        preview: "Box-to-box midfielder with tireless work rate",
        metrics: {
            energy: 92,
            maxSpeed: 120,
            status: 100,
            engineRate: [88, 72, 58, 42],
            powerRate: [82, 78, 88],
            powerPercentage: 83,
            matchData: [80, 88, 75, 92],
            performance: [65, 82, 88]
        },
        insights: [
            "Exceptional stamina and work rate",
            "Strong ball-winning abilities",
            "Versatile across multiple midfield positions",
            "Growing influence in attacking phases",
            "Improving tactical discipline"
        ],
        tags: ["Stamina", "Versatility", "Work Rate", "Ball Winning"]
    }
};

// Function to get player by ID
function getPlayerData(playerId) {
    return playersData[playerId] || null;
}

// Function to get all players
function getAllPlayers() {
    return playersData;
}
