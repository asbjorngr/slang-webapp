# Slang Webapp 🎬

A modern, responsive survey application for collecting user feedback about Trondheim Kino. Built with React, TypeScript, and Vite for a seamless mobile-first experience.

## 🎯 About

Slang is an interactive survey platform designed to gather insights and feedback about Trondheim Kino. The application guides users through a series of questions with audio recording capabilities, providing a comprehensive data collection experience.

## ✨ Features

- **📱 Mobile-First Design** - Optimized for mobile devices with responsive desktop support
- **🎙️ Audio Recording** - Built-in voice recording functionality for detailed responses
- **🎨 Modern UI** - Clean, accessible interface with smooth animations
- **📊 Multi-Screen Flow** - Guided survey experience with progress tracking
- **🔄 Real-time Updates** - Hot module replacement for seamless development
- **🌐 Form Submission** - Netlify Forms integration for data collection
- **♿ Accessibility** - Follows modern accessibility standards

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 with custom properties and responsive design
- **Routing:** React Router DOM
- **Audio:** Web Audio API
- **Forms:** Netlify Forms
- **Fonts:** Custom typography with EightiesComeback font family
- **Icons:** SVG assets

## 📱 Responsive Design

The application features a sophisticated responsive design system:

- **Mobile (< 768px):** Optimized touch interface with mobile-specific spacing
- **Tablet (768px+):** Enhanced layout with improved typography scaling
- **Desktop (1024px+):** Full desktop experience with viewport-based sizing
- **Large Desktop (1440px+):** Enhanced spacing and typography for large screens
- **Ultra-wide (1920px+):** Optimized for ultra-wide displays

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asbjorngr/slang-webapp.git
   cd slang-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: http://localhost:5173/
   - Network: http://[your-ip]:5173/

### Development with Network Access

For testing on mobile devices or other computers on your network:

```bash
npm run dev -- --host
```

## 📁 Project Structure

```
slang-webapp/
├── public/                 # Static assets
│   ├── pony-icon.png      # App icon
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Media assets
│   │   ├── *.svg         # Icon files
│   │   ├── *.otf         # Custom fonts
│   │   ├── *.png         # Images
│   │   └── *.mp3         # Audio files
│   ├── components/        # Reusable components
│   │   └── AudioPlayer.tsx
│   ├── screens/          # Screen components
│   │   ├── WelcomeScreen.tsx
│   │   ├── QuestionScreen.tsx
│   │   ├── TipsScreen.tsx
│   │   ├── RegistrationScreen.tsx
│   │   └── ...
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Typography
- **Headings:** EightiesComeback font family
- **Body Text:** System fonts with fallbacks
- **Responsive:** Fluid typography using `clamp()` and viewport units

### Colors
- **Background:** `#F8F3FF` (Light purple)
- **Primary:** `#C7B1E8` (Purple)
- **Accent:** `#ffffff` (White)
- **Text:** `#222` (Dark gray)

### Layout
- **Mobile-first:** Progressive enhancement approach
- **Flexible containers:** Viewport-based widths with minimum constraints
- **Consistent spacing:** CSS custom properties for spacing scale

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Screen Flow

1. **Welcome** - Introduction and app overview
2. **Audio Intro** - Instructions for audio recording
3. **Tips** - Guidelines for participants
4. **Enable Recording** - Permission setup
5. **Get Ready** - Final preparation
6. **Questions** - Interactive survey (16 questions)
7. **Completed** - Survey completion
8. **Registration** - Contact information collection
9. **Final** - Thank you and next steps

## 🎙️ Audio Features

- **Web Audio API integration**
- **Real-time recording**
- **Audio playback controls**
- **Recording permissions handling**
- **Mobile-optimized audio interface**

## 🌐 Deployment

The application is configured for easy deployment on various platforms:

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Forms are automatically handled by Netlify Forms

### Other Platforms
The built application in the `dist` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🐛 Issues & Support

For issues, questions, or support, please contact the development team or create an issue in the repository.

## 🔮 Future Enhancements

- [ ] Analytics integration
- [ ] Enhanced audio compression
- [ ] Offline support
- [ ] Multi-language support
- [ ] Advanced accessibility features
- [ ] Data visualization dashboard

---

Made with ❤️ for Trondheim Kino research
