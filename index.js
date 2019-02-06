const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'interlingua')));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/index.html'));
});

router.get('/basic-grid',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/pages/basic-grid.html'));
});

router.get('/full-width',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/pages/full-width.html'));
});

router.get('/gallery',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/pages/gallery.html'));
});

router.get('/sidebar-left',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/pages/sidebar-left.html'));
});

router.get('/sidebar-right',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/pages/sidebar-right.html'));
});

router.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/interlingua/layout/index.html'));
});

app.use('/', router);



app.listen(process.env.port || 3000, () => {
    console.log("Node.js start")
});