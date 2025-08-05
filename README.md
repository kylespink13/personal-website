# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Designed for aerospace engineering students and researchers to showcase their work and projects.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with smooth animations
- **Multiple Pages**: Home, About, Work, Blog, and Contact pages
- **Typewriter Effect**: Animated text effects for engaging user experience
- **Scroll Animations**: Fade-in animations triggered by scroll position
- **Dynamic Navigation**: Animated navigation with active page highlighting

## Tech Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **GitHub Pages**: Static site hosting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Automatic Deployment

1. Push your code to GitHub
2. Install the gh-pages package (already included):
```bash
npm install gh-pages --save-dev
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the contents of the `dist` folder to the `gh-pages` branch of your repository

### GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

Your site will be available at `https://yourusername.github.io/personal-website`

## Customization

### Personal Information

Update the following files with your personal information:

- `src/Layout.js`: Update "Your Name" in the navigation and footer
- `src/Pages/contact.js`: Update contact information
- `src/Pages/about.js`: Update your bio and skills
- `src/Pages/work.js`: Add your projects and work experience
- `src/Pages/blog.js`: Add your blog posts

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Update the color schemes in `src/Layout.js`
- Typography: Modify font settings in `tailwind.config.js`
- Layout: Adjust spacing and layout in individual components

### Adding New Pages

1. Create a new component in `src/Pages/`
2. Add the route in `src/App.jsx`
3. Update the navigation in `src/Layout.js`
4. Add the page URL mapping in `src/utils.js`

## Project Structure

```
src/
├── Components/          # Reusable components
│   └── AnimatedText.jsx
├── Pages/              # Page components
│   ├── index.js        # Home page
│   ├── about.js        # About page
│   ├── work.js         # Work/Projects page
│   ├── blog.js         # Blog listing page
│   ├── blogPost.js     # Individual blog post
│   └── contact.js      # Contact page
├── App.jsx             # Main app component
├── Layout.js           # Layout wrapper
├── main.jsx            # Entry point
├── index.css           # Global styles
└── utils.js            # Utility functions
```

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run deploy`: Build and deploy to GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 