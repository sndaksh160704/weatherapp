const express=require("express");
const bodyParser=require("body-parser");
const fetch=require("node-fetch");
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
// require('dotenv').config();
app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    const sendData={location:"Location",temp:"Temp",country:"Country",descrip:"Description",feel:"Feel-like",humidity:"Humidity",speed:"Speed"};
    res.render("index",{sendData:sendData});
});

app.post("/",async (req,res)=>{
    let location=await req.body.city;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=429b18cfcb6eb9748b6a5a84e110fcfe`; 
    const response=await fetch(url);
    const weatherData=await response.json();
    const temp=Math.floor((weatherData.main.temp)/10);
    const descrip=weatherData.weather[0].description;
    const sendData={};
    sendData.temp=temp;
    sendData.descrip=descrip;
    sendData.location=location;
    sendData.feel=Math.floor((weatherData.main.feels_like)/10);
    sendData.humidity=weatherData.main.humidity;
    sendData.speed=weatherData.wind.speed;
    sendData.country=weatherData.sys.country;
    res.render('index',{sendData:sendData});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})