const  express = require("express");

const  app=express();

app.use(express.static(__dirname))

const api=require("./routes/user");
app.use("/api/userApi",api);

var port=process.env.PORT || 1000;
// var host = process.env.HOST || 'localhost';

app.listen(port,function(err,result){
    if(err){
        console.error(err);
    }
    else
    console.log("started 1000");
});
