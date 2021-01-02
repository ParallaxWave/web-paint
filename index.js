const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json({limit: '1mb'}));
const port = process.env.PORT || 3000;
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
