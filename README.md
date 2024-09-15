# Snaply
Our project helps Photographers to get an individual and more interactive platform to showcase their work and reach like-minded people for connections and building a community.
``` text
/snaply-project
│
├── backend
│   ├── config
│   │   ├── auth.js
│   │   ├── db.js
│   │   └── unleash.js
│   │
│   ├── controllers
│   │   ├── chatController.js
│   │   ├── imageController.js
│   │   ├── recommendationController.js
│   │   └── userController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models
│   │   ├── Chat.js
│   │   ├── Image.js
│   │   ├── Recommendation.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── chatRoutes.js
│   │   ├── imageRoutes.js
│   │   ├── recommendationRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── utils
│   │   ├── aiHelper.js
│   │   └── searchHelper.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Chat.js
│   │   │   ├── ImageDisplay.js
│   │   │   ├── Navbar.js
│   │   │   ├── Profile.js
│   │   │   └── Recommendations.js
│   │   │
│   │   ├── styles
│   │   │   ├── Chat.css
│   │   │   ├── ImageDisplay.css
│   │   │   ├── Navbar.css
│   │   │   ├── Profile.css
│   │   │   └── Recommendations.css
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── unleash.js
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md 
```