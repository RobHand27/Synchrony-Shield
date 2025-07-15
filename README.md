## Runner-Up in Synchrony Corporate AI Hackathon

## Authors

- [Rob Hand](https://github.com/RobHand27)
- [Devin Patel](https://github.com/DevinPatel123)
- [Kush Patel](https://github.com/kush1314)


# Synchrony Shield Website

A modern, responsive website for Synchrony Shield - a Chrome extension that protects sensitive data with real-time pattern-based detection, without relying on external AI systems.

##  Features

### Core Website Sections

- **Hero Section**: Compelling headline with key features and call-to-action buttons
- **Interactive Demo**: Real-time PII redaction demonstration with customizable data types
- **Features Section**: Detailed overview of core capabilities with animated cards
- **Testimonials**: Social proof from satisfied users
- **SWOT Analysis**: Interactive analysis of strengths, weaknesses, opportunities, and threats
- **About Section**: Company story and impressive statistics
- **Call-to-Action**: Contact and download options
- **Footer**: Complete site navigation and social links

### Interactive Features

- **Real-time PII Detection**: Live demonstration of pattern-based data protection
- **Customizable Redaction**: Choose which data types to mask using regex patterns and custom phrases
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Professional transitions and hover effects
- **Modal Dialogs**: Contact forms and download options
- **Mobile Navigation**: Hamburger menu for mobile devices

### Technical Features

- **Modern CSS**: CSS Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript**: No framework dependencies
- **Performance Optimized**: Debounced scroll events and efficient animations
- **Accessibility**: Proper focus states and semantic HTML
- **Cross-browser Compatible**: Works on all modern browsers

##  Design

### Color Scheme

- **Primary Yellow**: #FFB700 (Brand Orange)
- **Secondary Yellow**: #FFB700 (Brand Orange)
- **Accent Yellow**: #FFB700 (Brand Orange)
- **Success Green**: #28a745
- **Warning Orange**: #ffc107
- **Danger Red**: #dc3545

### Typography

- **Font Family**: Inter (Google Fonts)
- **Clean, Modern Design**: Professional appearance aligned with enterprise software

##  Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

##  Interactive Demo

The demo section includes real-time PII detection for:

- **Email Addresses**: Standard email format detection
- **Phone Numbers**: Various phone number formats
- **Credit Cards**: Major credit card number patterns
- **Social Security Numbers**: SSN format (XXX-XX-XXXX)
- **Addresses**: Street address patterns
- **Names**: Formal name patterns with titles

### How to Use the Demo

1. Enter text containing sensitive information in the input field
2. Select which data types you want to mask using the checkboxes
3. Watch the real-time sanitization in the output field
4. Visual feedback shows when redaction occurs

##  Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

### File Structure

```
hackathonwebsite/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

##  Key Features Explained

### 1. Hero Section

- Compelling headline and tagline
- Feature highlights with icons
- Dual call-to-action buttons
- Animated shield icon

### 2. Interactive Demo

- Real-time text processing
- Configurable data type selection
- Visual feedback for redactions
- Example text pre-loaded

### 3. Features Grid

- Four core feature cards
- Hover animations
- Icon-based design
- Detailed descriptions

### 4. SWOT Analysis

- Color-coded cards for each category
- Interactive hover effects
- Comprehensive analysis points
- Professional presentation

### 5. Testimonials

- Three customer testimonials
- Avatar placeholders
- Hover animations
- Professional styling

##  Customization

### Colors

Modify the CSS custom properties in `styles.css`:

```css
:root {
  --primary-blue: #0066cc;
  --secondary-blue: #004499;
  /* ... other colors */
}
```

### Content

Update the HTML content in `index.html` to match your specific needs:

- Company information
- Feature descriptions
- Testimonials
- Contact information

### Demo Patterns

Add or modify PII detection patterns in `script.js`:

```javascript
const piiPatterns = {
  // Add new patterns here
  custom: {
    pattern: /your-regex-pattern/g,
    replacement: "[CUSTOM DATA]",
  },
};
```

##  Performance

### Optimizations

- **Debounced scroll events**: Prevents excessive function calls
- **CSS animations**: Hardware-accelerated transitions
- **Efficient selectors**: Optimized DOM queries
- **Minimal dependencies**: No external libraries required

### Loading

- **Progressive enhancement**: Works without JavaScript
- **Fast initial load**: Optimized CSS and minimal JS
- **Smooth animations**: 60fps transitions

##  Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

##  License

This project is created for demonstration purposes. Feel free to modify and use for your own projects.

##  Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  Support

For questions or support, please contact the development team.

---

**Synchrony Shield** - Protecting sensitive data in real-time with advanced pattern-based redaction technology that doesn't rely on external AI systems.
