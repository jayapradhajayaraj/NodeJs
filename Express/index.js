import express from "express";
const app=express();
const port =3000;

//Get
app.get("/",(req,res)=>{
    console.log(req);
  });

app.get("/home",(req,res)=>{
  res.send("<h1>Welcome to Express Server</h1>");
});

app.get("/register",(req,res)=>{
    res.send("<h1>Welcome to Express Server</h1>");
  });
app.get("/about",(req,res)=>{
    res.send("<h2>About us</h2><p>Express Server is a part of node component. We provide server support to the web application</p>");
});
app.get("/contact",(req,res)=>{
    res.send("<body><h2>Server support:</h2><p>Email:<href>jayapradha.jayaraj@gmail.com</href></p><p>Phone:+7361808261</p></body>");
});
//post
app.post("/register", (req,res)=>{
    req.sendStatus(200);
})
//put
app.put("/register/Jay",(req,res)=>{
    req.sendStatus(200);
})
//patch
app.patch("/register/Jay",(req,res)=>
{
    req.sendStatus(200);
})
//delete
app.delete("/register/Jay",(req,res)=>{
    req.sendStatus(200);
})
app.listen(port,()=>{
  console.log(`Server started ${port}`);
});

