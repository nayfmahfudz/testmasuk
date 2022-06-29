let { deleteartikelById,getartikel,getartikelById,insertartikel,updateartikelById } = require("../models/artikelModels.js");
 
// Get All artikels
exports.showartikel = (req, res) => {
    // console.log(req);
    getartikel((err, results) => {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            console.log(results);
            res.json(results);
        }
    });
}
 
// Get Single artikel 
exports.showartikelById = (req, res) => {
    getartikelById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({status:"succes",data:results});
        }
    });
}
 
// Create New artikel
exports.createartikel = (req, res) => {
    const data = req.body;
    insertartikel(data, (err, results) => {
        if (err){
            res.json("Data Tidak Tersimpan");
        }else{
            res.json("Data Tersimpan");
        }
    });
}
 
// Update artikel
exports.updateartikel = (req, res) => {
    console.log(req.params.id)
    const data  = req.body;
    const id    = req.params.id;
    updateartikelById(data, id, (err, results) => {
        if (err){
            res.json("Data Tidak Terupdate");
        }else{
            res.json("Data Terupdate");
        }
    });
}
 
// Delete artikel
exports.deleteartikel = (req, res) => {
    const id = req.params.id;
    deleteartikelById(id, (err, results) => {
        if (err){
            res.json("Data Tidak Terhapus");
        }else{
            res.json("Data Terhapus");
        }
    });
}
 