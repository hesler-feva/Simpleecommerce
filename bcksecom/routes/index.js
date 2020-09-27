//incroporacion de dependencias
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(
  '/info', 
  function(req, res){
    var infoObj = {}; //$infoObj = array();
    infoObj.cuenta = "0817199800256";
    infoObj.nombre = "Hesler Ferrera";
    infoObj.email = "heslerferrera@gmail.com";
    res.json(infoObj);
  }
);

router.get(
  '/hook',
  function(req, res){
    res.render("hook", {});
  }
);

router.post(
  '/hook',
  function(req, res){
    var body = req.body;
    console.log(body);
    res.render("hook", body);
  }
);

module.exports = router;
