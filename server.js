const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const cors = require('cors');


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyPaser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL).then(() => {
    console.log("MongoDB Connected !")
}).catch((err) => {
    console.log("Error Connecting to Mongo DB",err.message);
});

// user Router
 const usersRouter = require("./Routes/userRoutes");
 app.use("/api", usersRouter);

// Post Router
 const postRouter = require("./Routes/postRoutes");
 app.use("/api", postRouter);



// Start the server
app.listen(PORT,() => {
    console.log(`Server is Running on PORT ${PORT}`);
});

