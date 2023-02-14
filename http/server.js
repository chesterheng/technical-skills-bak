const express = require("express");

const app = express();

// parses incoming requests with JSON data in req.body
app.use(express.json());

// parses incoming requests with form data in req.body
app.use(express.urlencoded({ extended: false }));

// serves static files and website
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
  // res.send(req.headers);
  // res.send(req.header("user-agent"));
  // res.send(req.rawHeaders);
});

app.post("/contact", (req, res) => {
  console.log(req.body)
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }

  // DATABASE STUFF
  res.status(201).send(`Thank you ${req.body.name}`);

  // res.send(req.body);
  // res.send(req.body.name);
  // res.send(req.headers);
  // res.send(req.header("content-type"));
  // res.send(req.header("Content-Type"));
});

app.post("/login", (req, res) => {
  if (!req.header("authorization")) {
    return res.status(400).send("No Token");
  }

  if (req.header("authorization") !== "Bearer 123456") {
    return res.status(401).send("No authorized");
  }

  res.send("Logged in");
});

app.put("/post/:id", (req, res) => {
  // DATABASE STUFF

  res.json({ id: req.params.id, title: req.body.title });
});

app.delete("/post/:id", (req, res) => {
  // DATABASE STUFF

  res.json({ msg: `Post ${req.params.id} deleted` });
});

app.listen(5000, () => console.log("Server started on 5000"));
