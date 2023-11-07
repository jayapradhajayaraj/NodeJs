import express from "express";
import { escapeXML } from "ejs";
import { dirname } from "path";
import {fileURLToPath} from "url";

const port=3000;
const app=express();
app.listen(port,()=>{
    console.log ("Connection established");
});

app.get("/",(req,res)=>{
    const d=new Date("nov 7, 2023 01:00:00");
    var day=d.getDay();
    console.log(day);
    if(day=== 0 || day=== 6){
        res.render("Index.ejs",{day:"Weekend",desc:"Time to fun"});
    }
    else{
        res.render("Index.ejs",{day:"Weekday",desc:"Time to work"});
    }
    
});