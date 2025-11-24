# Hardik Pandya - Player Profile Dashboard

A modern, gaming-centric cricket player profile built with React for Hitwicket. This project reimagines the traditional ESPN Cricinfo player page with a focus on modern UI/UX, interactive analytics, and gaming elements.

## 🎯 Features

### 1. Modern UI/UX
- **Card-based Design**: Clean, modular layout with distinct sections
- **Hitwicket Color Scheme**: Purple and blue gradients throughout
- **Smooth Animations**: Fade-in effects and hover interactions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 2. Player Header
- High-quality player image with role badge
- Concise, engaging bio
- Visual attribute display with icons (Age, Batting Style, Bowling Style, Role)

### 3. Quick Stats
- Eye-catching stat chips with icons
- Key metrics: T20I Runs, Average, Strike Rate, Wickets, Economy, IPL Titles
- Gradient backgrounds with hover effects

### 4. Power Attributes
- Gaming-style ratings (out of 100)
- Attributes: Batting Power, Finishing Ability, Death Bowling, Consistency, Fielding, Fitness
- Animated progress bars with shimmer effects
- Player role in team strategy

### 5. Performance Analytics
- Interactive charts using Recharts
- Strike rate progression over years (Line Chart)
- Performance vs top teams (Bar Chart)
- Visual representation of statistics

### 6. Achievements & Iconic Moments
- Card-based achievement display
- Chronological iconic moments with descriptions
- Interactive hover effects

### 7. Advanced Analytics
- Strengths & Weaknesses analysis
- Match Impact Ratings
- Win contribution metrics
- Pressure performance index

### 8. Hitwicket-Exclusive Features
- **Marketplace Value**: Current value with trend indicators
- **Skill Boosters**: Gaming-style power-ups (Power Boost, Stamina, Bowling Variation)
- **Fantasy Selection Tips**: Strategic recommendations
- **All-Rounder Comparison**: Visual comparison with Sam Curran and Marcus Stoinis

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\Bharath\Documents\HitWicket"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization
- **CSS3** - Styling with gradients, animations, and responsive design
- **Google Fonts (Inter)** - Modern typography

## 🎨 Design Philosophy

### Current Problems in Cricinfo
- Text-heavy, outdated layout
- Table-heavy statistics
- Minimal visual appeal
- Poor mobile experience
- No gaming/fantasy elements

### Our Solution
- **Visual First**: Icons, charts, and gradients instead of plain text
- **Gaming Integration**: Power attributes, skill boosters, marketplace value
- **Modern Typography**: Inter font for clean, professional look
- **Interactive Elements**: Hover effects, smooth transitions
- **Mobile Optimized**: Touch-friendly, responsive grid layouts

## 🏗️ Project Structure

```
HitWicket/
├── src/
│   ├── components/
│   │   ├── PlayerHeader.jsx/css
│   │   ├── QuickStats.jsx/css
│   │   ├── PowerAttributes.jsx/css
│   │   ├── PerformanceCharts.jsx/css
│   │   ├── Achievements.jsx/css
│   │   ├── IconicMoments.jsx/css
│   │   ├── AdvancedAnalytics.jsx/css
│   │   └── HitwicketFeatures.jsx/css
│   ├── App.jsx/css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Improvements Over Traditional Profile Pages

1. **Visual Hierarchy**: Most important info (stats, attributes) presented prominently
2. **Gaming Elements**: Power attributes, skill boosters make it feel like a game character
3. **Analytics Focus**: Charts and graphs instead of plain tables
4. **Fantasy Integration**: Tips and comparisons for fantasy cricket players
5. **Brand Alignment**: Hitwicket colors and gaming terminology throughout
6. **Mobile First**: Optimized for on-the-go viewing

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+ (full grid layout)
- **Tablet**: 768px - 1400px (adjusted columns)
- **Mobile**: < 768px (single column, touch-optimized)

## 🎨 Color Palette

- Primary Purple: `#667eea`
- Secondary Purple: `#764ba2`
- Success Green: `#43e97b`
- Warning Pink: `#fa709a`
- Info Blue: `#4facfe`
- Light Pink: `#f093fb`

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📝 Future Enhancements

- Player video highlights integration
- Live match updates
- Comparison with more players
- User ratings and comments
- Social media integration
- Performance prediction AI

## 👨‍💻 Developer

Built for Hitwicket assessment

---

**Note**: This is a demonstration project showcasing modern UI/UX design principles for cricket player profiles with a gaming twist.
