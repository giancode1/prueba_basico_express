const express = require("express");
const morgan = require("morgan");
const app = express();

//Settings 
app.set('appName','Gian App')
app.set('port',3000)

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extend: false }));
app.use(express.static("public")); // se publica en la raiz


//Basic routing
app.get("/", (req, res) => {
    const data = [{ name: 'john'},{name:'joe'}, {name:'cameron'}];
    res.render('index.ejs',{people: data})
})

app.get("/test", function (req, res) {
  res.send("<h1>Test</h1>");
});

app.get("/user", function (req, res) {
  res.json({
    username: "Gian",
    country: "Ecuador",
  });
});

app.post("/user/:id", function (req, res) {
  console.log("req.body", req.body);
  console.log("req.params:", req.params);
  res.send("Got a POST request");
});

app.put("/", function (req, res) {
  res.send("Got a PUT request");
});

app.delete("/", function (req, res) {
  res.send("Got a DELETE request");
});

app.listen(app.get('port'), function () {
    console.log(app.get('appName'));
    console.log(`Example app listening at http://localhost:${app.get('port')}`);
});