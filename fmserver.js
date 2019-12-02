const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/sphi-rwax.json";
  fetch(baseURL)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});

app.post("/", (req, res) => {});

app.put("/", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
