var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ObjectID = require('mongodb').ObjectID;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db("stock_market_db");


    //  API STOCK MARKET COLLECTION

  app.get("/market_stock", function(req, res){
    const marketStockCollection = db.collection("market_stock");
    marketStockCollection.find().toArray(function(err, marketStock){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(marketStock);
    });
  })

  app.post("/market_stock", function(req, res){

    const marketStockCollection = db.collection("market_stock");
    const stockToSave = req.body;

    marketStockCollection.save(stockToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(stockToSave);
    })
  });

  app.delete("/market_stock", function(req, res){
    const marketStockCollection = db.collection("market_stock");

    const filterObject = {};

    marketStockCollection.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  })


  // PORTFOLIO COLLECTION

  app.get("/portfolio", function(req, res){
    const portfolioCollection = db.collection("portfolio");
    portfolioCollection.find().toArray(function(err, portfolio){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(portfolio);
    });
  })

  app.post("/portfolio", function(req, res){

    const portfolioCollection = db.collection("portfolio");
    const portfolioStockToSave = req.body;

    portfolioCollection.save(portfolioStockToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(portfolioStockToSave);
    })
  });

  app.delete("/portfolio", function(req, res){
    const portfolioCollection = db.collection("portfolio");

    const filterObject = {};

    portfolioCollection.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  })

  app.put('/portfolio/:id', function(req, res){
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;
    const portfolioCollection = db.collection('portfolio');
    portfolioCollection.update(filterObject, updatedData, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });

  app.delete('/portfolio/:id', function(req, res){
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const portfolioCollection = db.collection('portfolio');
    portfolioCollection.deleteOne(filterObject, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });


  // PROFIT COLLECTION

  app.get("/profit", function(req, res){
    const profitCollection = db.collection("profit");
    profitCollection.find().toArray(function(err, profit){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(profit);
    });
  })

  app.post("/profit", function(req, res){

    const profitCollection = db.collection("profit");
    const profitToSave = req.body;

    profitCollection.save(profitToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(profitToSave);
    })
  });

  app.delete("/profit", function(req, res){
    const profitCollection = db.collection("profit");

    const filterObject = {};

    profitCollection.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  })

  app.put('/profit/:id', function(req, res){
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;
    const profitCollection = db.collection('profit');
    profitCollection.update(filterObject, updatedData, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });


  // LOSS COLLECTION

  app.get("/loss", function(req, res){
    const lossCollection = db.collection("loss");
    lossCollection.find().toArray(function(err, loss){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(loss);
    });
  })

  app.post("/loss", function(req, res){

    const lossCollection = db.collection("loss");
    const lossToSave = req.body;

    lossCollection.save(lossToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(lossToSave);
    })
  });

  app.delete("/loss", function(req, res){
    const lossCollection = db.collection("loss");

    const filterObject = {};

    lossCollection.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  })

  app.put('/loss/:id', function(req, res){
    const objectID = ObjectID(req.params.id);
    const filterObject = {_id: objectID};
    const updatedData = req.body;
    const lossCollection = db.collection('loss');
    lossCollection.update(filterObject, updatedData, function(err, result){
      if(err){
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  });

});

module.exports = app;
