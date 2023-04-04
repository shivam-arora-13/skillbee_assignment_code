const ejs = require('ejs');
const express = require('express');
const path = require("path")


const app = express();


// app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
  )
  app.use(
    "/js",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
  )
  app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
  

app.get('/', (req, res) => {
    const data = {
        key : "2237769",
        activity : "Explore the nightlife of your city",
        price : 0.1,
        accessibility : 0.32,
        type : "social"
    };
    res.render('template.ejs', data);
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});