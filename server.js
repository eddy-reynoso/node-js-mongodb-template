let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let db = mongoose.connect("mongodb://localhost/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = 3000;

var ExampleCollectionItem = require("./models/exampleModel.js");

app.post("/addToDB", function(req, res) {
  let item = new ExampleCollectionItem();

  item.attribute = req.body.attribute;

  item.save(function(err, savedItem) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(savedItem);
    }
  });
});

app.get("/getDBItems", function(req, res) {
  ExampleCollectionItem.find({}, function(err, items) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(items);
    }
  });
});

app.listen(port, function() {
  console.log("Listening on port", port);
});
