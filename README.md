# Bite Right - Mini Burger Startup Landing Page

## 🍔 Project Overview

A modern, mobile-friendly landing page for **Bite Right**, a mini burger startup based in Hyderabad, India. The site features a fun yet professional design with smooth animations, high-quality food imagery, and optimized user experience across all devices.

## ✨ Features

### Design & Aesthetics
- **Warm Color Palette**: Mustard yellow (#F4B400), tomato red (#E53935), charcoal black (#2C2C2C), and white (#FFFFFF)
- **Modern Typography**: Poppins font family for clean, readable text
- **Playful Logo**: Custom burger-themed SVG logo with integrated typography
- **High-Quality Images**: Curated food photography from Unsplash

### User Experience
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Smooth Animations**: Scroll-triggered reveals, hover effects, and transitions
- **Interactive Elements**: Ripple effects on buttons, image zoom on hover
- **Sticky Mobile CTA**: Prominent WhatsApp order button on mobile devices
- **Gallery Modal**: Click-to-expand image gallery with smooth transitions

### Performance Optimizations
- **Lazy Loading**: Images load as they come into viewport
- **Image Preloading**: Critical images loaded in advance
- **Debounced Scroll Events**: Optimized scroll performance
- **CSS Variables**: Consistent theming and easy maintenance

## 🏗️ Project Structure

```
bite-right-landing/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS styling with responsive design
├── script.js           # JavaScript for interactivity and animations
├── logo.svg            # Custom Bite Right logo (SVG format)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended)

### Installation & Setup

1. **Clone or Download** the project files to your local machine

2. **Open the website**:
   - **Option A**: Simply open `index.html` in your web browser
   - **Option B**: Use a local web server for optimal performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with live-server)
     npx live-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the site** at `http://localhost:8000` (if using a local server)

## 📱 Sections Overview

### 1. Hero Section
- Eye-catching tagline: "Small Bites. Big Flavor."
- Prominent CTA buttons for WhatsApp ordering and Instagram following
- High-quality hero image of mini burgers
- Smooth fade-in animations

### 2. About Section
- Brand story emphasizing quality and local Hyderabad roots
- Feature highlights with icons (Fresh Ingredients, Bold Flavors, Made with Love)
- Side-by-side layout with complementary imagery

### 3. Menu Section
- Showcase of 6 signature mini burger varieties:
  - Classic Mini (₹120)
  - Spicy Hyderabadi (₹150)
  - Cheese Burst (₹180)
  - Veggie Delight (₹140)
  - BBQ Special (₹160)
  - Fish Fillet (₹170)
- Hover effects and staggered animations
- Direct ordering CTA

### 4. Gallery Section
- Infinite scrolling carousel of food and customer images
- Click-to-expand modal functionality
- Pause-on-hover interaction

### 5. Contact Section
- Location highlight: Hyderabad, India
- Direct links to WhatsApp and Instagram
- Strong final CTA for ordering

### 6. Footer
- Logo, copyright, and social links
- Clean, minimal design

## 🎨 Design System

### Colors
```css
--primary-yellow: #F4B400  /* Mustard yellow for accents */
--primary-red: #E53935     /* Tomato red for CTAs */
--charcoal: #2C2C2C        /* Dark text and backgrounds */
--white: #FFFFFF           /* Clean backgrounds and text */
--light-gray: #F8F9FA      /* Section backgrounds */
--medium-gray: #6C757D     /* Subtitle text */
```

### Typography
- **Headings**: Poppins Bold (700-800 weight)
- **Body Text**: Poppins Regular (400 weight)
- **CTAs**: Poppins Semi-Bold (600 weight)

### Spacing & Layout
- **Max Width**: 1200px for content containers
- **Border Radius**: 12px for modern, friendly appearance
- **Shadows**: Layered box-shadows for depth
- **Grid System**: CSS Grid and Flexbox for responsive layouts

## 📱 Mobile Optimizations

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, stacked layout)
- **Small Mobile**: < 480px (compact spacing)

### Mobile-Specific Features
- **Hamburger Menu**: Collapsible navigation
- **Sticky CTA**: Fixed WhatsApp button at bottom
- **Touch-Friendly**: Larger buttons and touch targets
- **Optimized Images**: Smaller file sizes for mobile

## 🔧 Customization Guide

### Updating Contact Information
Replace placeholder links in `index.html`:
```html
<!-- Replace XXXXXXXXXX with actual phone number -->
<a href="https://wa.me/91XXXXXXXXXX">

<!-- Update Instagram handle -->
<a href="https://instagram.com/biterightindia">
```

### Adding New Menu Items
1. Copy an existing `.menu-item` div in `index.html`
2. Update the image source, title, description, and price
3. CSS styling will automatically apply

### Customizing Colors
Update CSS variables in `style.css`:
```css
:root {
    --primary-yellow: #your-color;
    --primary-red: #your-color;
    /* ... other colors */
}
```

### Replacing Images
- Update image URLs in `index.html`
- Maintain aspect ratios for best results
- Use high-quality, optimized images (WebP recommended)

## 📊 Performance Features

- **Lazy Loading**: Images load only when visible
- **Optimized Assets**: Compressed images and minified code
- **Modern CSS**: Flexbox and Grid for efficient layouts
- **Efficient Animations**: CSS transforms and opacity changes
- **Font Loading**: Google Fonts with display swap

## 🌐 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repos
- **Firebase Hosting**: Google's static hosting

### Traditional Hosting
- Upload all files to your web server's public directory
- Ensure proper MIME types for SVG files

## 📞 Support & Contact

### WhatsApp Integration
The site includes multiple WhatsApp integration points:
- Hero section CTA
- Menu section ordering button
- Contact section link
- Sticky mobile CTA

**To activate**: Replace `91XXXXXXXXXX` with your actual WhatsApp number (including country code)

### Instagram Integration
Direct links to Instagram profile for social media growth and customer engagement.

## 🔮 Future Enhancements

Potential additions for future versions:
- **Online Ordering System**: Integration with food delivery platforms
- **Customer Reviews**: Testimonials and rating system
- **Location Finder**: Interactive map for multiple locations
- **Loyalty Program**: Digital rewards system
- **Nutritional Information**: Detailed ingredient and calorie data
- **Multi-language Support**: English and Telugu/Hindi options

## 📄 License

This project is created for Bite Right and includes placeholder content. Replace all placeholder text, images, and contact information before deploying to production.

---

**Built with ❤️ for Bite Right - Small Bites. Big Flavor.**
