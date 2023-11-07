import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app=express();
const port =3000;
const __dirname=dirname(fileURLToPath(import.meta.url));
var userISAuthorised=false;


app.use(bodyParser.urlencoded({extended:true}));

function validatePasswd(req,res,next){
    const passwd=req.body["password"];
    console.log(_dirname);
    if(passwd="Jayapradha"){
        userISAuthorised=true;
    }
    next();
}

app.use(validatePasswd);

app.get("/",(req,res)=>{
    console.log("Home page");
    res.sendFile(_dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(userISAuthorised=true)
    {
        res.sendFile(__dirname + "/public/index.html");
        console.log(__dirname + "/public/index.html");
    }else{
        res.sendFile(__dirname + "/public/secret.html");
    }
})


app.listen(port, ()=>{
    console.log(`connection established ${port}`);

});