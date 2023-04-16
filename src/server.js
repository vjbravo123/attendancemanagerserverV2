const express = require("express");
const app = express();
const routertesting = require("./router")
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares:-----

//CORS-CROSS ORIGIN RESOURCE SHARING FOR USING BY ANOTHER DEVICES OR ORIGIN
app.use(cors());
//TO PARSE THE REQUEST BODY 
app.use(bodyParser.json());


//USING THE ROUTERS
app.use('/',routertesting);


app.listen(5000,()=>{
    console.log("server running on port 5000");
})