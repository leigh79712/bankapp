const express = require("express");
const next = require("next");
const dev = "development";
const app = next({ dev });
const cors = require("cors");
const handle = app.getRequestHandler();
const port = 3000;

const mongoose = require("mongoose");

const mongo_Url = `mongodb+srv://dbUser:W7aMnwMsSSGDcBBF@cluster0.6epjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(mongo_Url)
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log(err);
  });

app.prepare().then(() => {
  const server = express();
  server.use(cors({ origin: "http://localhost:3000", credential: true }));

  server.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
