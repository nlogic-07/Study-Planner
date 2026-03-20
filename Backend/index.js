const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

let port = 8080;

let data = [
  { username: "xyz", comment: "yoo" },
  { username: "anonymous", comment: "dk" },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/", (req, res) => {
  const newData = req.body.data;
  console.log(newData.username, "comments this -->", newData.comment);
  data.push(newData);
  res.json(newData);
});

app.listen(port, () => {
  console.log(`App listening to port : ${port}`);
});
