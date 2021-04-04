const express = require("express");
const mongoose = require("mongoose");

const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/api'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

htmlRouter(app);
// apiRouter(app); 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});