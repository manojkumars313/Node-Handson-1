const http = require("http");

const sever = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(
        JSON.stringify({
          message:
            " Nodejs is a JavaScript runtime built on Chromes V8 JavaScript engine1 It allows you to run JavaScript on the serverside",
        })
      );
      res.end();
    } else if (req.url === "/about") {
      res.write("The About page");
      res.end();
    } else if (req.url === "/contact") {
      res.write("The Contact page");
      res.end();
    }
  })
  .listen(3002);

// const express = require("express");
// const app = express();
// // const port = 3001;

// app.get("/", function (req, res) {
//   res.send("I am Default");

// });

// app.get("/AboutUs", function (req, res) {
//   console.log("I am About Us");

//   // const querry = req.query;
//   // console.log(querry);

//   // res.send("login Success!", JSON.stringify(querry));
// });

// app.post("/Contact", function (req, res) {
//   res.send("I am Contact");
// });

// app.listen(3005);

// app.listen(port, () => {
//   console.log(`Listening ${port}`);
// });

// console.log("Start NOde");
