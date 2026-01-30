import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3000;


// Serve static files from "Public" folder
app.use(express.static("Public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/printing", (req, res) => {
  res.render("printing.ejs");
});

app.get("/design", (req, res) => {
  res.render("design.ejs");
});

app.get("/finishing", (req, res) => {
  res.render("finishing.ejs");
});

app.get("/training", (req, res) => {
  res.render("training.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

