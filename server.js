const express = require("express");
const morgan = require("morgan"); //un middleware
const app = express();

//middleware, manejador de peticion, lapuedo ejecutar antes que llegue a su ruta original
/* function logger(req, res, next) {
  console.log(`Peticion received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
} */


app.use(express.json()); //ahora entiende json cuando un cliente lo envie
//app.use(logger);
app.use(morgan('dev')); 
app.use(express.urlencoded({ extend: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening at http://localhost:3000");
});

//Basic routing
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
  console.log("req.body", req.body); //cuerpo de la peticion
  console.log("req.params:", req.params); //   user/todoesto
  res.send("Got a POST request");
});

app.put("/", function (req, res) {
  res.send("Got a PUT request");
});

app.delete("/", function (req, res) {
  res.send("Got a DELETE request");
});

/* app.all('/user',(req, res, next) => {
    console.log('Por aqui paso')
    //res.send('Terminado')
    next()
}) */
