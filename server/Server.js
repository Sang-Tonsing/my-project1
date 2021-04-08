const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb://localhost/my-project1";

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

app.use(express.json());

//Router
const routeSignUp = require("../route/routeSignUp");
app.use("/postUser", routeSignUp);

const routeSignIn = require("../route/routeSignIn");
app.use("/getUser", routeSignIn);

con.on("open", () => {
  console.log("Database is connected...");
});

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Server started. Listening at http://${address}:${port}`);
});
