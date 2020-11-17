
exports.seed = async function(knex) {
     // CLEARS OUT TABLE TO START FRESH
     await knex("car-dealer").truncate()

     await knex("car-dealer").insert([
        { 
          VIN: "1B3HB48BX7D582459", 
          make: "Ford", 
          model: "F150", 
          mileage: 167000,
          manual: false,
          title_status: "Lease"
        },
        { 
         VIN: "1FDKE30G2THB78745", 
         make: "Chevy", 
         model: "Impala", 
         mileage: 186000,
         manual: false,
         title_status: "Lease"
       },
       { 
         VIN: "1FMCU9J92EUA34570", 
         make: "Mazda", 
         model: "CX-9", 
         mileage: 80000,
         manual: true,
         title_status: "Owned"
       },
       { 
         VIN: "3VW2K7AJ5FM254468", 
         make: "Toyota", 
         model: "Highlander", 
         mileage: 230000,
         manual: true,
         title_status: "Owned"
       },
       { 
         VIN: "JTEBU11F18K004608", 
         make: "Subaru", 
         model: "Forester", 
         mileage: 16000,
         manual: false,
         title_status: "Owned"
       },
     ])

};

/*
FOR POST/TESTING----------

 { 
   "VIN": "5NPE34AF0FH102997", 
   "make": "Buick", 
   "model": "LeSabre", 
   "mileage": 300000,
   "manual": false,
   "title_status": "Salvage"
 }

FOR PUT/TESTING (ID 1)-----

 { 
   "VIN": "1B3HB48BX7D582459", 
   "make": "Ford", 
   "model": "F150", 
   "mileage": 180101,
   "manual": false,
   "title_status": "Owned"
 }



*/
