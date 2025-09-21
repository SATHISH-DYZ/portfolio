Portfolio Website

This is a personal portfolio website built with React (TypeScript) and served via Nginx using Docker.

🚀 Features

Responsive portfolio website built with React + TypeScript

Sections for About, Contact, Projects, Skills, and Experience

Dockerized build: React app is built and served with Nginx

Simple, maintainable folder structure

🛠️ Tech Stack

React + TypeScript (Frontend)

Nginx (Static file server)

Docker (Containerization)

⚙️ Installation & Running Locally

Clone the repository:

git clone https://github.com/yourusername/portfolio.git
cd portfolio


Install dependencies:

npm install


Start the development server:

npm run dev


Open http://localhost:5173
 in your browser.

🐳 Docker Build & Run

Build the Docker image:

docker build -t portfolio-app .


Run the container:

docker run -p 80:80 portfolio-app


Open http://localhost
 to view your portfolio.

 🌍 Deployment

You can deploy this app easily to:

AWS EC2

Azure

Google Cloud

Heroku (via Docker)

Vercel / Netlify (without Docker)