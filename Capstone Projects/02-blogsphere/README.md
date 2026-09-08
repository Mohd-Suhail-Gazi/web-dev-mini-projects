# BlogSphere

BlogSphere is a clean, minimal, and premium full-stack blogging web application built using **Node.js**, **Express.js**, and **EJS** (Embedded JavaScript) templates. It uses **Vanilla CSS3** for visual styling (responsive grid layouts, glassmorphism, and smooth active transitions) and **Vanilla JavaScript** for client-side forms and modal confirms.

The application allows users to perform full CRUD operations (Create, Read, Update, Delete) on blog posts using an in-memory database configuration.

---

## Technical Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS (Embedded JavaScript)
- **Frontend Styling:** Responsive Vanilla CSS3 (Midnight Indigo Theme)
- **Client Interactions:** Vanilla JavaScript (DOM manipulations, confirmations, mobile hamburger menu toggles)
- **Unique Post Keys:** Cryptographically secure IDs utilizing native `crypto.randomUUID()`

---

## Features

1. **Complete CRUD Lifecycle:**
   - **Create:** Publish a blog article with input validation.
   - **Read:** View recent posts on the landing hero dashboard or browse all posts in an adaptive grid catalog. Read the complete article on a dedicated details page.
   - **Update:** Prepopulate and edit existing post information.
   - **Delete:** Safely remove articles from storage.
2. **Double-Ended Validations:** Form fields (Title, Author, Content) validate instantly on the client side and are thoroughly re-verified on the server to prevent empty entries.
3. **Custom Confirmation Popup:** Blocks default delete events to prompt users with a custom, glassmorphic modal overlay instead of standard browser confirm boxes.
4. **Unified Templates:** Page parts (headers, footers, navbars) are modularized using EJS partials.
5. **Wildcard Error Handling:** Invalid URLs automatically route to a customized 404 page.

---

## File Structure

```text
hopeful-tesla/
├── public/
│   ├── css/
│   │   └── style.css       # Core stylesheets & CSS custom variables
│   ├── js/
│   │   └── script.js       # Client validation, menus, custom modals
│   └── images/
├── views/
│   ├── partials/
│   │   ├── header.ejs      # HTML structure & CSS stylesheet link
│   │   ├── navbar.ejs      # Unified navigation bar
│   │   └── footer.ejs      # Dynamic copyright footer & JS script link
│   ├── index.ejs           # Landing page (Hero + 3 Recent Posts)
│   ├── posts.ejs           # All posts list grid view
│   ├── post.ejs            # Full article view & delete action structures
│   ├── create.ejs          # Create post form page
│   ├── edit.ejs            # Edit post form page
│   ├── about.ejs           # Project summary and developer details
│   └── 404.ejs             # Page Not Found custom page
├── routes/
│   └── posts.js            # Posts router handling GET/POST CRUD routes
├── app.js                  # Main server listener & middleware config
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v14.17.0 or higher recommended) installed.

### Installation

1. Open your terminal in the root directory:
   ```bash
   cd hopeful-tesla
   ```
2. Install the production dependencies:
   ```bash
   npm install
   ```

### Running the Server

#### Development Mode (with hot-reloading)
Runs the server with `nodemon` to automatically restart whenever you modify backend files:
```bash
npm run dev
```

#### Production Mode
Runs the application normally using node:
```bash
npm start
```

Once started, open your web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**
