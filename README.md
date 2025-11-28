# CJ Sports Agency Website

A modern, responsive website for a sports agency specializing in AI-powered football talent prediction and player representation.

## 🎯 Project Overview

This website showcases CJ Sports Agency, a pioneering sports agency that uses artificial intelligence and proprietary prediction models to identify and represent talented football players. The site features:

- Modern, technology-inspired design with cyan/teal color scheme
- Fully responsive layout optimized for mobile, tablet, and desktop devices
- Interactive player cards with detailed metrics dashboards
- AI-themed visual elements and animations
- Professional contact form and information pages

## 📁 Project Structure

```
CJsportsWebPage/
├── index.html              # Homepage with hero section and agency overview
├── css/
│   ├── styles.css         # Global styles, variables, navigation, footer
│   ├── home.css           # Homepage-specific styles
│   ├── players.css        # Players gallery page styles
│   ├── player-detail.css  # Player detail page with metrics dashboard
│   ├── about.css          # About page styles
│   └── contact.css        # Contact page styles
├── js/
│   ├── main.js            # Core functionality, navigation, scroll effects
│   ├── animations.js      # Animation controllers and visual effects
│   ├── contact.js         # Contact form handling and validation
│   └── metrics.js         # Player metrics dashboard animations
├── pages/
│   ├── players.html       # Player cards gallery
│   ├── player-detail.html # Individual player profile with metrics
│   ├── about.html         # About the agency and technology
│   └── contact.html       # Contact form and information
├── images/                # Directory for images (add your assets here)
└── components/            # Reusable components (for future expansion)
```

## 🎨 Design Features

### Color Palette
- Primary Cyan: `#00d9ff`
- Secondary Cyan: `#00b8d4`
- Accent Cyan: `#18ffff`
- Dark Blue: `#0a1628`
- Dark Navy: `#0d1b2a`
- Darker Background: `#050d18`

### Typography
- Primary Font: 'Rajdhani', 'Orbitron' (headings)
- Secondary Font: 'Roboto', 'Arial' (body text)

### Key Visual Elements
- Glowing neon effects on interactive elements
- Animated circular data visualizations
- Gradient backgrounds with radial glows
- Pulsing animations on key elements
- Smooth hover transitions and transforms

## 📱 Pages Description

### 1. Homepage (`index.html`)
- Hero section with tagline "THE NEW ERA OF TALENT: PREDICT TO REPRESENT"
- AI Technology showcase with 4 feature cards
- Statistics counter section
- Call-to-action sections

### 2. Players Gallery (`pages/players.html`)
- Grid of player cards (6 sample players)
- Hover effects revealing player preview info
- Click to navigate to detailed player profile
- Responsive grid layout

### 3. Player Detail Page (`pages/player-detail.html`)
- Comprehensive metrics dashboard inspired by the provided image
- Circular gauges (Energy, Speed, Status)
- Bar graphs and charts (Engine Rate, Power Rate, Match Data)
- Area charts showing progression trends
- AI Prediction Analysis section with key insights
- Fully animated data visualizations

### 4. About Page (`pages/about.html`)
- Mission statement and agency overview
- 6 service cards explaining what the agency does
- Technology breakdown (4 key tech features)
- Statistics showcase
- Call-to-action section

### 5. Contact Page (`pages/contact.html`)
- Contact form with validation
- Contact information cards (Email, Phone, Office, Hours)
- Social media links
- Map placeholder section

## 🚀 Features

### Responsive Design
- Mobile-first approach
- Breakpoints at 480px, 768px, 968px, and 1200px
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen size

### Interactive Elements
- Animated statistics counters
- Hover effects on cards and buttons
- Smooth scroll navigation
- Form validation with real-time feedback
- Parallax scrolling effects
- Scroll progress indicator

### Animations
- Fade-in animations on scroll
- SVG circle animations for metrics
- Progress bar animations
- Pulsing glow effects
- Rotating orbital elements
- Staggered grid item animations

## 🛠️ Customization

### Adding Player Images
1. Add player photos to the `images/` folder
2. Update the `.player-avatar` divs in `players.html` and `player-detail.html`
3. Replace emoji placeholders with `<img>` tags

### Modifying Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-cyan: #00d9ff;
    --secondary-cyan: #00b8d4;
    /* ... other colors */
}
```

### Adding More Players
1. Duplicate a `.player-card` in `players.html`
2. Update player information (name, position, stats)
3. Create corresponding data in `js/metrics.js` playerData object
4. Update the link to `player-detail.html?id=X`

### Connecting Contact Form
The contact form currently logs data to console. To connect to a backend:
1. Update `js/contact.js` in the submit event handler
2. Replace the console.log with an API call to your server
3. Handle success/error responses appropriately

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- SVG for data visualizations
- CSS Animations and Transitions

## 📄 License

This project is created for CJ Sports Agency. All rights reserved.

## 🤝 Contributing

To contribute to this project:
1. Review the code structure and naming conventions
2. Maintain the established color scheme and design patterns
3. Ensure all changes are mobile-responsive
4. Test across different browsers and devices

## 📞 Support

For questions or issues with the website, please contact the development team.

---

**Created with passion for sports, technology, and data-driven innovation.**
