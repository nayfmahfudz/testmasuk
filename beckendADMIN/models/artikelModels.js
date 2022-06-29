let db = require("../config/config.js");
// Get All Pelanggans
exports.getPelanggan = (result) => {
    db.db.query("SELECT * artikel ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Pelanggan
exports.getPelangganById = (id, result) => {
    db.db.query("SELECT * artikel WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Pelanggan to Database
exports.insertPelanggan = (data, result) => {
    db.db.query("INSERT INTO artikel SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(data, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Pelanggan to Database
exports.updatePelangganById = (data, id, result) => {
    data.updateAt= date;
    db.db.query("UPDATE artikel judul = ? , author = ? , artikel = ? WHERE id = ?", [data.judul, data.author,data.artikel,id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Pelanggan to Database
exports.deletePelangganById = (id, result) => {
    db.db.query("DELETE FROM artikel WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}   