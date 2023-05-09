const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("Servidor corriendo");
  })
  

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html')
})


app.get("/register", (req, res) => {
  res.sendFile(__dirname + '/views/register.html')
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});

app.post("/", (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});