jambooneer-
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx         # Main page component (all sections)
│   │   ├── main.jsx        # Entry point
│   │   ├── index.css       # Global styles + Tailwind
│   │   └── assets/         # Images (logo, bottles, etc.)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env.example
│
├── server/                 # Express backend
│   ├── models/
│   │   └── Contact.js      # Mongoose schema
│   ├── routes/
│   │   └── contact.js      # API routes (POST / GET / PATCH)
│   ├── server.js           # Entry point
│   ├── package.json
│   └── .env.example
│
└── README.md               # You are here








backend setup -

npm init -y
installation - npm i cors express express-validator mongoose



Backend API (Connected to Form)

| Endpoint                        | What it does                                                             |
| ------------------------------- | ------------------------------------------------------------------------ |
| `POST /api/contact`             | Saves enquiry to MongoDB with validation + 5-minute duplicate protection |
| `GET /api/contact`              | Lists all enquiries (admin use)                                          |
| `PATCH /api/contact/:id/status` | Update status: `new` → `contacted` → `resolved`                          |
| `GET /api/health`               | Check server + DB status                                                 |



| Step | What Happens                                         | Where               |
| ---- | ---------------------------------------------------- | ------------------- |
| 1    | User fills form & clicks **Send Message**            | Browser             |
| 2    | `handleSubmit` validates inputs                      | `App.jsx`           |
| 3    | `fetch()` sends POST to `localhost:5000/api/contact` | Browser → Network   |
| 4    | CORS middleware allows the request                   | `server.js`         |
| 5    | `express.json()` parses the body                     | `server.js`         |
| 6    | `express-validator` checks fields                    | `routes/contact.js` |
| 7    | `Contact.findOne()` checks for duplicates            | `routes/contact.js` |
| 8    | `new Contact({...}).save()` writes to MongoDB        | `routes/contact.js` |
| 9    | Backend sends `{success: true, ...}` JSON            | `routes/contact.js` |
| 10   | Frontend receives response, shows success            | `App.jsx`           |




{
  "name": "jambooneer-server",
  "version": "1.0.0",
  "description": "Jambooneer backend API",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-validator": "^7.1.0",
    "mongoose": "^8.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}