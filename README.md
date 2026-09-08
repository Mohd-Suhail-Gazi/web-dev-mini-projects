# Web Development Mini Projects

A comprehensive collection of mini projects, exercises, and capstone applications completed during my Full Stack Web Development learning journey.

---

## 📁 Repository Structure

```text
web-dev-mini-projects/
├── Frontend/                 # HTML, CSS, Flexbox, Grid, Bootstrap, and DOM exercises
├── Backend/                  # Node.js, Express.js, EJS templates, and API integrations
├── Database/                 # PostgreSQL projects, SQL queries, and CRUD applications
├── Authentication/           # Progressive authentication and security implementations (Levels 1–4)
└── Capstone Projects/        # Complete multi-feature applications and interactive web games
```

### 1. 🎨 Frontend
- **HTML & Semantic Structure**: Heading exercises, paragraph elements, void elements, multi-page websites, and HTML portfolio layout.
- **CSS Styling & Layouts**: CSS selectors, Box Model, Font properties, Positioning, Display, Floats, and Media Queries.
- **Modern Layouts**: Flexbox layouts, Flexbox Pricing Table project, CSS Grid placement, Mondrian Project.
- **Bootstrap 5**: Bootstrap intro, components, and responsive TinDog startup landing page.
- **DOM Manipulation**: DOM challenge and interactive element control.

### 2. ⚙️ Backend
- **Node.js Basics**: Native modules (`fs`, path), NPM packages, and QR Code Generator CLI project.
- **Express.js Servers**: HTTP requests, routing, middleware (logging, custom body parsers), and Postman API testing.
- **EJS Templating Engine**: Dynamic data passing, EJS tags, partials (headers, footers), and Band Name Generator project.
- **API Integrations**:
  - `5.2 JSON`: Parsing, manipulating, and rendering complex JSON data.
  - `5.3 Axios`: Consuming external third-party REST APIs using Axios HTTP client.
  - `5.4 API Authentication`: Basic Auth, API Key authentication, and Bearer Token handling.

### 3. 🗄️ Database (PostgreSQL)
- **Postgres READ (`8.2`)**: Querying relational data, data modeling, and filtering flags dataset.
- **Travel Tracker (`8.3`)**: Interactive world map visualizing visited countries stored in PostgreSQL.
- **Family Travel Tracker (`8.5`)**: Multi-user travel tracker with relational user profiles, foreign keys, and personalized colors.
- **Permalist Project (`8.6`)**: Full CRUD persistent To-Do list with database-backed item status and inline editing.
- **World Capital Quiz**: Database-driven quiz testing knowledge of world capitals with score tracking.

### 4. 🔐 Authentication & Security
- **Level 1 (Basic DB Auth)**: Plaintext credential storage demonstration and registration/login flow.
- **Level 2 (Hashing & Salting)**: Password hashing with salt rounds using `bcrypt` to protect stored credentials.
- **Level 3 (Sessions & Cookies)**: State management with `express-session`, cookie serialization, and route protection.
- **Level 4 (Environment Variables)**: Securing sensitive credentials, database keys, and session secrets using `dotenv` with `.env.example`.

### 5. 🚀 Capstone Projects
- **01-resume-using-html**: Clean, semantic HTML5 curriculum vitae showcasing work and skills.
- **02-blogsphere**: Full-stack CRUD blogging platform with RESTful routing, post creation, editing, deletion, and responsive UI.
- **Dicee Challenge**: Interactive two-player dice rolling game built with DOM manipulation.
- **Drum Kit**: Keyboard- and click-triggered drum set with interactive sound effects and CSS animations.
- **Simon Game Challenge**: Classic Simon memory game with progressive sequences, sounds, and game-over states.

---

## 🛠️ Technologies Used

| Category | Technologies / Libraries |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, DOM Manipulation, jQuery |
| **Backend** | Node.js, Express.js, EJS Templating, Axios, REST APIs, Body-Parser |
| **Database** | PostgreSQL, SQL Queries, `pg` (Node-Postgres) driver |
| **Security & Auth** | Bcrypt, Express-Session, Passport.js, Dotenv (`.env`) |
| **Tools & Version Control** | Git, GitHub, Postman, npm |

---

## 🚀 Getting Started

To explore or run any project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohd-Suhail-Gazi/web-dev-mini-projects.git
   cd web-dev-mini-projects
   ```

2. **Navigate to the desired project directory:**
   ```bash
   cd "Capstone Projects/02-blogsphere"
   # or
   cd "Database/8.3+Travel+Tracker/8.3 Travel Tracker"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Environment Setup (where applicable):**
   If a project includes `.env.example`, create a `.env` file and add your database/session configurations:
   ```bash
   cp .env.example .env
   ```

5. **Run the project:**
   ```bash
   node index.js
   # or
   npm start
   ```

---

## 🎯 Purpose

Tracking my hands-on progress, architectural patterns, and practical implementation skills as I master full-stack web development.
