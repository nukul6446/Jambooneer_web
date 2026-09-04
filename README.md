jambooneer-
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── Jambooneer.jsx         # Main page component (all sections)
│   │   ├── main.jsx        # Entry point
│   │   ├── index.css       # Global styles + Tailwind
│   │   └── assets/         # Images (logo, bottles, etc.)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   
│
├── server/                 # Express backend
│   ├── models/
│   │   └── Contact.js      # Mongoose schema
│   ├── routes/
│   │   └── contact.js      # API routes (POST / GET / PATCH)
│   ├── server.js           # Entry point
│   ├── package.json
│   └── .env
│
└── README.md               # You are here





===============================================
if u want to run this project u need .env with completion of this fiels 
  
# Get your URI from MongoDB Atlas (https://www.mongodb.com/atlas)
 
MONGO_URI= 
PORT=5000 
 
CLIENT_URL=http://localhost:5173



# CLIENT_URL = https://your-exact-site.netlify.app

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER= 
SMTP_PASS= 
ADMIN_EMAIL= 
 


=========================================================================================

backend setup -

npm init -y
installation - npm i cors express express-validator mongoose
============================================================
 
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
