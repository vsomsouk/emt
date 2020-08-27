const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mysql database using sequelize route
const Employee = require("./models/employee.js");
app.get("/api/employees", (req, res) => {
  Employee.findAll({}).then((results) => {
    res.json(results);

  });
});

// creating (working)
app.post("/api/employee", (req, res) => {
  Employee.create(
  { 
    employee_id: 28389,
    info: "Stuart"
  })
    .then((results) => {
      res.json(results);

    });
});

// destroy (working)
app.delete("/api/employee/:id", (req, res) => {
  Employee.destroy(
  {
    where: {
      id: 3
    }
  })
  .then((results) => {
    res.json(results);
  });
});;

// static data route
app.get("/api/sample", (req, res) => {
  const sampleData = [
    { id: 1, info: "this is public info" },
    { id: 2, info: "everybody sees this" }
  ];
  res.json(sampleData)
});

// catchall, send to react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`API server now on port ${PORT}!`);
});
