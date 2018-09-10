/*jshint esversion :  6 */

// @root/model/produit.js

const produitModel = function produitModel(connection) {

  const get = function(clbk, id) {
    let q;
    if (id) {
      q = "SELECT * FROM produit";
    } else {
      q = "SELECT * FROM produit";
    }
    connection.query(q, [id], function(err, result, fields) {
      // console.log(this.sql);
      console.log("err ?");
      console.log(err);
      console.log("result ?");
      console.log(result);
      return clbk(err, result);
      // si pas d'erreurs, err vaut null, data vaut un object
      // si erreurs, data vaut null, err vaut un  object
    });
  };

  const remove = function() {
    console.log("je suis model user => remove");
  };

  const update = function() {
    console.log("je suis model user => update");
  };

  const create = function() {
    console.log("je suis model user => create");
  };

  return {
    get: get,
    create: create,
    remove: remove,
    update: update
  }

};

module.exports = produitModel;
