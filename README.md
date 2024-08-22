# Blog Page Project

This project is a simple blog page built using **EJS** (Embedded JavaScript templating) as the templating engine, with **Express.js** as the backend framework. The blog page allows users to view, create, and manage blog posts.

## Features

- **Create Blog Posts**: Users can create blog posts with a title and content.
- **View Blog Posts**: All blog posts are displayed on the home page, with each post linking to its individual detailed page.
- **Responsive Design**: The page is designed to be responsive for all screen sizes.
- **Dynamic Templating**: EJS templates allow dynamic rendering of content based on the data provided.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: Git

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js (v14+)
- MongoDB (optional, if using a database)
- Git

### Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/blog-page-ejs.git
    cd blog-page-ejs
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file at the root of your project and add the following variables:
    ```bash
    PORT=3000
    DB_URI=mongodb://localhost:27017/blogDB
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **View the app**:
    Visit `http://localhost:3000` in your browser to view the blog page.

## Project Structure

```plaintext
├── views
│   ├── partials
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── pages
│   │   ├── home.ejs
│   │   ├── blog.ejs
├── public
│   ├── css
│   │   └── styles.css
│   └── js
├── routes
│   └── blogRoutes.js
├── app.js
├── package.json
└── README.md
