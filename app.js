// const http = require("http");
// const path = require("path");
// const { mimeTypes } = require("./appModules/http-utils/");
// const { mainRouteController, defaultRouteController, gameRouteController, voteRouteController } = require("./controllers/index");
// // ...импорты и настройки

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   switch (url) {
//     case "/":
//       mainRouteController(res, "/index.html", ".html");
//       break;
//     case "/game":
//       gameRouteController(res);
//       break;
//     case "/vote":
//       voteRouteController(req, res);
//       break;
//     default:
//       defaultRouteController(res, url);
//   }
// });

// server.listen(3005); // ...порт


// app.js 
const express = require('express');

// Импортируем роутеры
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

const PORT = 3000;
const app = express();

// Запускаем
app.use(mainRoute, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})
