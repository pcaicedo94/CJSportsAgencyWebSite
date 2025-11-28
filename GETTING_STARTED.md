# Getting Started with CJ Sports Website

## 🚀 Quick Start

1. **Open the website**
   - Simply open `index.html` in your web browser
   - No server setup required - it's a static website!

2. **Navigate the site**
   - Use the navigation menu to explore different pages
   - Test on different screen sizes (mobile, tablet, desktop)

## 📂 File Organization

### Main Files
- `index.html` - Start here! The homepage

### Pages Directory (`pages/`)
- `players.html` - View all players
- `player-detail.html` - Individual player metrics
- `about.html` - Agency information
- `contact.html` - Contact form

### Styles Directory (`css/`)
- `styles.css` - Global styles (REQUIRED for all pages)
- `home.css` - Homepage only
- `players.css` - Players page only
- `player-detail.css` - Player detail page only
- `about.css` - About page only
- `contact.css` - Contact page only

### Scripts Directory (`js/`)
- `main.js` - REQUIRED for all pages (navigation, core features)
- `animations.js` - Optional animations
- `contact.js` - Only for contact page
- `metrics.js` - Only for player detail page

## 🎨 Customization Guide

### 1. Change Colors
Open `css/styles.css` and modify the CSS variables:
```css
:root {
    --primary-cyan: #00d9ff;    /* Change to your primary color */
    --secondary-cyan: #00b8d4;  /* Change to your secondary color */
    /* ... more colors ... */
}
```

### 2. Add Your Logo
Replace the brain emoji (🧠) in navigation with your logo:
```html
<!-- Replace this: -->
<span class="brain-icon">🧠</span>

<!-- With this: -->
<img src="images/your-logo.png" alt="Logo" style="width: 40px;">
```

### 3. Add Player Photos
1. Put photos in the `images/` folder
2. In `players.html`, replace:
```html
<!-- Replace this: -->
<div class="player-avatar">⚽</div>

<!-- With this: -->
<div class="player-avatar">
    <img src="../images/player-name.jpg" alt="Player Name">
</div>
```

3. Add this CSS to maintain the circular effect:
```css
.player-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### 4. Update Company Information
- **Company Name**: Search for "CJ SPORTS" and replace throughout
- **Tagline**: Search for "Predict to Represent" and update
- **Contact Info**: Edit in `pages/contact.html`

### 5. Add More Players
In `pages/players.html`, copy a player card and modify:
```html
<div class="player-card" data-player="7">
    <!-- Update all player information -->
    <div class="player-number">10</div>
    <h3 class="player-name">NEW PLAYER NAME</h3>
    <p class="player-position">POSITION</p>
    <!-- ... rest of card ... -->
</div>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at: `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your project folder
3. Site goes live instantly with free HTTPS

### Option 3: Traditional Web Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory
3. Maintain the folder structure

## 📱 Testing

### Test Responsiveness
1. **Chrome DevTools**: Right-click → Inspect → Toggle device toolbar
2. Test these sizes:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1920px

### Test Navigation
- Click all menu items
- Test the mobile hamburger menu
- Try the back button on player detail page
- Submit the contact form

### Test Browsers
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## ⚡ Performance Tips

1. **Optimize Images**
   - Resize images before uploading
   - Use WebP format for better compression
   - Recommended max size: 1920px wide

2. **Minimize HTTP Requests**
   - Already optimized with few CSS/JS files
   - Consider combining CSS files for production

3. **Enable Caching**
   - Add `.htaccess` file for Apache servers
   - Configure cache headers

## 🔧 Common Issues

### Navigation not working on mobile
- Make sure `js/main.js` is loaded
- Check browser console for errors

### Styles not applying
- Verify CSS file paths are correct
- Check if you're in the right directory

### Images not showing
- Use correct relative paths
- `../images/` from pages directory
- `images/` from root directory

## 📞 Need Help?

Check the README.md file for detailed documentation.

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder text with real content
- [ ] Add actual player photos
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all internal links
- [ ] Optimize images
- [ ] Test in different browsers
- [ ] Add favicon (icon in browser tab)
- [ ] Update meta tags for SEO

## 🎯 Next Steps

1. Customize the content to match your agency
2. Add real player data and photos
3. Connect the contact form to a backend/email service
4. Add Google Analytics or tracking
5. Set up social media links
6. Add more pages as needed (Blog, News, etc.)

---

**Ready to launch? Your website is fully functional and ready to customize!**
