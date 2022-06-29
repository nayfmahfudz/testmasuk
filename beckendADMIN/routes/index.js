// import express
var express = require('express');
 
// import function from controller
let { showartikel, showartikelById, createartikel, updateartikel, deleteartikel } =require("../controller/artikel.js");
 
// init express router../controller/artikel.js
const router = express.Router();
router.get('/', function name(req,res) {
    res.json({"test":"welcome api"})
});
router.post('/login', loginUser);
// Get All artikel
router.get('/artikel', showartikel);
 
// Get Single pembayaran
router.get('/artikel/:id', showartikelById);
 
// Create New pembayaran
router.post('/artikel', createartikel);
 
// Update pembayaran
router.put('/artikel/:id', updateartikel);
 
// Delete pembayaran
router.delete('/artikel/:id', deleteartikel);
module.exports = router;
