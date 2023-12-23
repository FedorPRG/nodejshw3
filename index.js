const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const port = 3000;
const pathFile = path.join(__dirname, "counter.json");
const counter = JSON.parse(fs.readFileSync(pathFile, 'utf-8'));

app.get("/", (req, res) => {

  counter.index += 1;

  res.send(`<h1>Корневая страница</h1><span> Просмотров:${counter.index}</><br><a href="/about">Ссылка на страницу /about</a>`);

  fs.writeFileSync(pathFile, JSON.stringify(counter));

});


app.get("/about", (req, res) => {
  counter.about += 1;

  res.send(`<h1>Cтраница about</h1><span>Просмотров:${counter.about}</span><br><a href="/">Ссылка на страницу /</a>`);
  fs.writeFileSync(pathFile, JSON.stringify(counter));

});

app.listen(port, () => console.log('Сервер запущен'));;