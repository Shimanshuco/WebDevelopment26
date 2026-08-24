const express = require('express');
const app = express();

console.log(app);

//PORT  : Ports are the logical endpoints for a network connection that is used to exchange infromation between the server and a web client.
const PORT = 3000;


// Routing : it is a process of seleccting a path for traffic in a network or between or across multiple networks. 
// It is used to match the response with routes.


// / : Default route
app.get("/",(req,res)=>{
    res.send('This is default page');
    
});

// /profile/:name : Dynamic route
app.get("/profile/:name",(req,res)=>{
    let name = req.params.name;
    res.send(`This is profile page of ${name}`);
});

// Querry String : It is a part of a uniform resource locator (URL) that assigns values to specified parameters.
app.get("/search",(req,res)=>{
    let name = req.query.name;
    res.send(`This is search page of ${name}`);
});

// Sending response

// Method : 01 
// app.get('/:request',(req,res)=>{
//     let request = req.params.request;
//     res.send(`This page doesn't exist`);
// });

//Method : 02
// app.use((req,res)=>{
//     res.send("Page doesn't exist");
// });

//Method : 03
// app.get(/.*/, (req, res) => {
//     res.status(404).send('404 - Page Not Found');
// });


// Start the server and listen for incoming requests
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});