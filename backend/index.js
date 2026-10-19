const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');   

require('dotenv').config();

const app = express();


//Make upload folder public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));




//middleware
app.use(cors());
app.use(express.json());

// route
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

// mongoDb
mongoose.connect(process.env.MONGO_URI,{})
.then(()=>console.log("Mongo DB Connected"))
.catch((err)=> console.log("Mongo Db Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server Running on Port: ${PORT}`))