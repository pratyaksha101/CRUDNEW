require("dotenv").config();
const express = require("express");
const app = express();
const mongoose  = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema")
const DB = "mongodb+srv://pratyaksha102:dreamgpms2512@cluster0.6tlswad.mongodb.net/mernstacknew?retryWrites=true&w=majority"
const cors  = require("cors");
const router =  require("./routes/router");


const port = 8003;



app.use(cors())//frontend ko backend se connect krte waqt error na aaye isliye cors use kar re hai
app.use(express.json());

app.use(router);


app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});