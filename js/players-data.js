// ===================================
// PLAYERS DATA
// Central data source for all players
// ===================================

const playersData = {
    1: {
        number: "07",
        name: "JUAN CAICEDO",
        sport: "football",
        position: "STRIKER – WINGER – ATTACKING MIDFIELDER",
        image: "../images/juan.png",
        age: 21,
        height: "1.71m",
        nationality: "Colombia",
        foot: "Right",
        potential: 85,
        videoUrl: "../videos/juan.mp4",
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
        number: "10",
        name: "MATHIAZ ZAPATA",
        sport: "football",
        position: "STRIKER - WINGER",
        image: "../images/mathiaz.png",
        age: 10,
        height: "1.15m",
        nationality: "Spain",
        foot: "Right",
        potential: 92,
        videoUrl: "../videos/juan.mp4",
        preview: "The complete modern playmaker: high-precision under pressure, high-impact in recovery.",
        metrics: {
            energy: 95,
            maxSpeed: 115,
            status: 100,
            engineRate: [80, 70, 65, 65],
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
    3: {
        number: "09",
        name: "KENNET PINTO",
        sport: "football",
        position: "CENTER FORWARD - WINGER",
        image: "../images/kennet.png",
        age: 21,
        height: "1.73m",
        nationality: "Colombia",
        foot: "Right",
        potential: 88,
        videoUrl: "../videos/kennet.mp4",
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
    4: {
        number: "17",
        name: "FELIPE AYALA GARCIA",
        sport: "basketball",
        position: "SHOOTING GUARD - POINT GUARD",
        image: "../images/felipe.jpg",
        age: 17,
        height: "1.65m",
        wingspan: "1.75m",
        nationality: "Colombia",
        hand: "Right",
        potential: 90,
        videoUrl: "../videos/felipe.mp4",
        preview: "Explosive guard with incredible ball-handling skills",
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
            "Electrifying speed and acceleration on the court",
            "Exceptional ball-handling and dribbling ability",
            "Creative playmaking and court vision",
            "High work rate on both offense and defense",
            "Rapid development trajectory"
        ],
        tags: ["Speed", "Ball Handling", "Vision", "Defense"]
    },
    5: {
        number: "01",
        name: "SIMON HEDMAN",
        sport: "football",
        position: "GOALKEEPER",
        image: "../images/3.jpeg",
        age: 23,
        height: "1.88m",
        nationality: "Sweden",
        foot: "Right",
        potential: 87,
        videoUrl: "../videos/simonhedman.mp4",
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
        name: "JOMAR POBLETE",
        sport: "boxing",
        position: "LIGHTWEIGHT",
        weightClass: "132 lbs",
        image: "../images/jomar.jpg",
        age: 17,
        height: "1.65m",
        reach: "1.70m",
        nationality: "Philippines",
        hand: "Right",
        stance: "Orthodox",
        potential: 89,
        videoUrl: "../videos/jomar.mp4",
        preview: "standard aggresive amateur style/highguard",
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
            "Exceptional stamina and endurance",
            "Strong punching power and combinations",
            "Versatile fighting style and adaptability",
            "Growing influence with technical precision",
            "Improving tactical discipline and ring awareness"
        ],
        tags: ["Stamina", "Power", "Technique", "Adaptability"]
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

// Function to get players by sport
function getPlayersBySport(sport) {
    const players = {};
    Object.keys(playersData).forEach(id => {
        if (playersData[id].sport === sport) {
            players[id] = playersData[id];
        }
    });
    return players;
}

// Function to get all sports
function getAllSports() {
    const sports = new Set();
    Object.values(playersData).forEach(player => {
        sports.add(player.sport);
    });
    return Array.from(sports);
}
