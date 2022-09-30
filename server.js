const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const apiRouter = require("./routes/api/apiRouter.js");
const dbConn = require("./db.js");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/places", apiRouter);
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css/"))
);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

dbConn.connDB();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
