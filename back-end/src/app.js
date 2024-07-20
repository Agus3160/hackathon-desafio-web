const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mapsApi = require('./api/MapsApi');
const userApi = require('./api/UserApi');
const securityApi = require('./api/SecurityApi')
const categoryApi = require('./api/CategoryApi')
const cors = require('cors')
require('dotenv').config()

//middleware
app.use(express.json());
var corsOptions = {
    origin: '',
    optionsSuccessStatus: 200
  }
  
app.use(cors(corsOptions));

//database connection
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => console.log('Connection failed!'));

//routes
app.use('/api/maps/', mapsApi);
app.use('/api/user/', userApi);
app.use('/api/security/', securityApi);
app.use('/api/category/', categoryApi);
