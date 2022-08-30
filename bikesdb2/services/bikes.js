const db = require('./db');
const helper = require('../helper');
const config = require('../config');

//GET
async function getStations(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT  FID, ID, Nimi, Namn, Name, Osoite, Adress, Kaupunki, Stad, Operaattor, Kapasiteet, x, y
    FROM bikestations LIMIT ${offset},${config.listPerPage}`
  ); //Departure, Return, DepartureStationID, DepartureStationName, ReturnStationID, ReturnStationName, CoveredDistance, Duration
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

//POST
async function create(bikestations){
    const result = await db.query(
      `INSERT INTO bikestations 
      (Nimi, Namn, Name, Osoite, Adress, Kaupunki, Stad,
        Operaattor, Kapasiteet, x, y) 
      VALUES 
      (${bikestations.Nimi}, ${bikestations.Namn}, ${bikestations.Name}, ${bikestations.Osoite},
         ${bikestations.Adress}, ${bikestations.Kaupunki}, ${bikestations.Stad}, ${bikestations.Operaattor}, 
         ${bikestations.Kapasiteet}, ${bikestations.x}, ${bikestations.y} )`
    );
  
    let message = 'Error in creating bike station';
  
    if (result.affectedRows) {
      message = 'Bike station created successfully';
    }
  
    return {message};
}

//PUT
async function update(id, bikestations){
    const result = await db.query(
      `UPDATE bikestations 
      SET Nimi="${bikestations.Nimi}", Namn="${bikestations.Namn}", Name="${bikestations.Name}", 
      Osoite="${bikestations.Osoite}", Adress="${bikestations.Adress}", Kaupunki="${bikestations.Kaupunki}",
      Stad="${bikestations.Stad}", Operaattor="${bikestations.Operaattor}", 
      Kapasiteet="${bikestations.Kapasiteet}", x="${bikestations.x}", Y="${bikestations.y}" 
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating Bikes station';
  
    if (result.affectedRows) {
      message = 'Bike station updated successfully';
    }
  
    return {message};
}

async function remove(id){
    const result = await db.query(
      `DELETE FROM bikestations WHERE id=${id}`
    );
  
    let message = 'Error in deleting bike station';
  
    if (result.affectedRows) {
      message = 'Bike station deleted successfully';
    }
  
    return {message};
}

  module.exports = {
    getStations,
  
    create,
    
    update,

    remove
  }