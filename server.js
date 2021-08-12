const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extend: false }));
app.use(express.static("public")); // se publica en la raiz
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
