const express = require('express');
const path = require('path');
const { router: postsRouter, getPosts } = require('./routes/posts');

const app = express();

// Set View Engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing incoming URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static CSS and JS files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// 1. GET / - Display home page and 3 recent blog posts
app.get('/', (req, res) => {
  const posts = getPosts();
  res.render('index', {
    pageTitle: 'Home',
    metaDescription: 'BlogSphere is a premium blogging platform where creators share stories, ideas, and software guides.',
    currentPath: '/',
    posts: posts
  });
});

// 2. GET /about - Display About page
app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    metaDescription: 'Learn more about BlogSphere\'s architecture, stack details, features, and core developers.',
    currentPath: '/about'
  });
});

// 3. Mount Posts Router (handles /posts routes)
app.use('/posts', postsRouter);

// 4. Wildcard 404 Route - Handles invalid URLs
app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    metaDescription: 'The page you are looking for does not exist on BlogSphere.',
    currentPath: ''
  });
});

// 5. Global Server Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error: Something went wrong on BlogSphere!');
});

// Start listening on environment port or default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` BlogSphere Server is running successfully!`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Press Ctrl+C to terminate the process.`);
  console.log(`==================================================`);
});
