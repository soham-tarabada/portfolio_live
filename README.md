# Portfolio Frontend

This repository contains the frontend of a personal portfolio website built using **React** and **Vite**. The website showcases projects, skills, education, and contact information in an interactive and visually appealing manner. It leverages modern web development tools and libraries, including **Tailwind CSS** for styling and **React Router** for navigation.

You can access the live version of this project at:  
[Live Portfolio Website Link](https://210130107079.github.io/portfolio_live/)

## Features

- **Responsive Design**: Optimized for various screen sizes, including mobile, tablet, and desktop.
- **Dynamic Content**: Utilizes animations and dynamic text effects using `lottie-react`.
- **Project Showcase**: Displays a grid of projects with descriptions, videos, and links.
- **Contact Form**: Enables users to send messages via email using `emailjs`.
- **Skills and Education**: Highlights technical skills and educational background.
- **Internship Experience**: Lists internships with details about roles and responsibilities.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Declarative routing for React applications.
- **Lottie**: Library for rendering animations.
- **EmailJS**: Service for sending emails directly from the frontend.

## Project Structure

```
frontend/
├── public/                  # Static assets
│   └── vite.svg             # Vite logo
├── src/                     # Source code
│   ├── assets/              # Images, videos, and JSON animations
│   ├── components/          # Reusable React components (Navbar, Footer, Hero, etc.)
│   ├── pages/               # Page components (Home, About, Contact, Projects, Resume)
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   ├── main.jsx             # Entry point for the React app
├── .eslintrc.js             # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## Pages Overview

1. **Home**: Introduction and dynamic text animation.
2. **About**: Details about education, skills, and internships.
3. **Projects**: Grid of projects with descriptions and videos.
4. **Contact**: Contact form with email integration.
5. **Resume**: Placeholder for the resume page.
