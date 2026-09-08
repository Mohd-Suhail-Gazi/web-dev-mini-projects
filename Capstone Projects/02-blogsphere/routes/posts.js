const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Date Formatter Helper (Format: July 19, 2026)
function getFormattedDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// In-Memory Blog Database Seed Data
let posts = [
  {
    id: 'd03e9112-9c17-4d92-8051-9bf63117462c',
    title: 'Getting Started with Node.js and Express',
    author: 'Alex Mercer',
    content: 'Node.js is a powerful JavaScript runtime environment built on Chrome\'s V8 JavaScript engine. Combined with Express, a minimal and flexible web application framework, you can build fast, robust, and scalable backend APIs and server-side rendered websites.\n\nIn this post, we will explore the core concepts of routing, middleware configuration, and setup that will enable you to deploy your first application. We will look at express.static, handling form data, and rendering HTML templates.',
    createdAt: 'July 18, 2026',
    updatedAt: 'July 18, 2026'
  },
  {
    id: 'f72a420b-29a3-4d8e-9d22-26194b63e8a6',
    title: 'The Beauty of Vanilla CSS3 Custom Themes',
    author: 'Sophia Chen',
    content: 'While CSS frameworks like Tailwind CSS, Bootstrap, and Bulma are popular, writing vanilla CSS3 from scratch offers unmatched control, flexibility, and performance.\n\nBy utilizing native CSS Custom Variables, modern layout features like Flexbox and CSS Grid, and custom Cubic-Bezier transitions, developers can craft beautiful, premium user interfaces that stand out. This blog post explores how we constructed BlogSphere\'s Midnight Indigo theme using clean CSS.',
    createdAt: 'July 19, 2026',
    updatedAt: 'July 19, 2026'
  },
  {
    id: 'b7b848df-7726-41f4-9a67-33bb6d738a66',
    title: 'Mastering Form Validations: Client vs Server',
    author: 'David K.',
    content: 'Form validation is a key aspect of user experience and security. Good frontend forms prevent users from submitting empty or invalid data, saving network requests and providing instantaneous feedback.\n\nHowever, client-side validation is easily bypassed. Implementing robust server-side validation checks is crucial to prevent database corruption and malformed payloads. Here, we discuss our approach to standardizing validation states across both environments.',
    createdAt: 'July 19, 2026',
    updatedAt: 'July 19, 2026'
  }
];

// --- ROUTES ---

// 1. GET /posts - Display all blog posts
router.get('/', (req, res) => {
  res.render('posts', {
    pageTitle: 'All Blogs',
    metaDescription: 'Browse through our full library of blog posts, articles, and development tutorials.',
    currentPath: '/posts',
    posts: posts
  });
});

// 2. GET /posts/new - Display create post form
router.get('/new', (req, res) => {
  res.render('create', {
    pageTitle: 'Write New Post',
    metaDescription: 'Create a new blog post and publish it directly to the BlogSphere network.',
    currentPath: '/posts/new',
    errors: [],
    post: {} // Empty post for rendering
  });
});

// 3. POST /posts - Handle post creation + server validation
router.post('/', (req, res) => {
  const { title, author, content } = req.body;
  const errors = [];

  // Server-side validation
  if (!title || title.trim() === '') {
    errors.push('Please enter a blog title.');
  }
  if (!author || author.trim() === '') {
    errors.push('Please enter the author name.');
  }
  if (!content || content.trim() === '') {
    errors.push('Blog content cannot be empty.');
  }

  // If there are validation errors, re-render the create form
  if (errors.length > 0) {
    return res.status(400).render('create', {
      pageTitle: 'Write New Post',
      metaDescription: 'Create a new blog post and publish it directly to the BlogSphere network.',
      currentPath: '/posts/new',
      errors: errors,
      post: { title, author, content }
    });
  }

  // If valid, create and add the post
  const today = getFormattedDate(new Date());
  const newPost = {
    id: crypto.randomUUID(),
    title: title.trim(),
    author: author.trim(),
    content: content.trim(),
    createdAt: today,
    updatedAt: today
  };

  // Add to the front of our array
  posts.unshift(newPost);

  // Redirect to newly created blog post
  res.redirect(`/posts/${newPost.id}`);
});

// 4. GET /posts/:id - Display individual blog details page
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);

  // Handle missing blog post
  if (!post) {
    return res.status(404).render('404', {
      pageTitle: 'Post Not Found',
      metaDescription: 'The requested blog post could not be found on BlogSphere.',
      currentPath: '/posts'
    });
  }

  res.render('post', {
    pageTitle: post.title,
    metaDescription: post.content.substring(0, 150),
    currentPath: '/posts',
    post: post
  });
});

// 5. GET /posts/:id/edit - Display edit form with prefilled values
router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  const post = posts.find(p => p.id === id);

  // Handle missing post
  if (!post) {
    return res.status(404).render('404', {
      pageTitle: 'Post Not Found',
      metaDescription: 'The requested blog post could not be found on BlogSphere.',
      currentPath: '/posts'
    });
  }

  res.render('edit', {
    pageTitle: `Edit: ${post.title}`,
    metaDescription: `Edit your existing blog post: ${post.title}`,
    currentPath: '/posts',
    errors: [],
    post: post
  });
});

// 6. POST /posts/:id/edit - Update blog post
router.post('/:id/edit', (req, res) => {
  const { id } = req.params;
  const { title, author, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === id);

  // Handle missing post
  if (postIndex === -1) {
    return res.status(404).render('404', {
      pageTitle: 'Post Not Found',
      metaDescription: 'The requested blog post could not be found on BlogSphere.',
      currentPath: '/posts'
    });
  }

  const errors = [];
  // Server-side validation checks
  if (!title || title.trim() === '') {
    errors.push('Please enter a blog title.');
  }
  if (!author || author.trim() === '') {
    errors.push('Please enter the author name.');
  }
  if (!content || content.trim() === '') {
    errors.push('Blog content cannot be empty.');
  }

  // If there are validation errors, re-render the edit form with user's inputs
  if (errors.length > 0) {
    return res.status(400).render('edit', {
      pageTitle: `Edit: ${title}`,
      metaDescription: `Edit your existing blog post: ${title}`,
      currentPath: '/posts',
      errors: errors,
      post: { id, title, author, content } // Keep values & id intact
    });
  }

  // Update the post fields
  posts[postIndex] = {
    ...posts[postIndex],
    title: title.trim(),
    author: author.trim(),
    content: content.trim(),
    updatedAt: getFormattedDate(new Date())
  };

  // Redirect to updated post details
  res.redirect(`/posts/${id}`);
});

// 7. POST /posts/:id/delete - Delete blog post
router.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex(p => p.id === id);

  // If post exists, delete it
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }

  // Redirect back to list
  res.redirect('/posts');
});

// Export Router and Posts list (so app.js can query posts for home page)
module.exports = {
  router,
  getPosts: () => posts
};
