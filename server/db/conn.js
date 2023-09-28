const mongoose  = require("mongoose");


const DB = "mongodb+srv://pratyaksha102:dreamgpms2512@cluster0.6tlswad.mongodb.net/mernstacknew?retryWrites=true&w=majority"


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));
//connect mongodb to node js