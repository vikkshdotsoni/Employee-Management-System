// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
var router = express.Router();

// BROWSER URL :- localhost:3000/teacher
// CALLBACK using =>  
router.get('/', (req, res) => 
       {res.send('<h3>INSIDE TEACHER GET METHOD..TEACHER DISPLAY API</h3>');}
                );

                // localhost:3000/employees/10

// BROWSER URL :- localhost:3000/teacher  (USING POSTMAN POST)
// post is used to INSERT DOCUMENT/RECORD
router.post('/', (req, res) => 
                 {
          res.send('<h3>INSIDE TEACHER POST METHOD..TEACHER INSERT API</h3>');
                });

// BROWSER URL :- localhost:3000/admin/20     (USING POSTMAN DELETE)
//DELETE API
 router.delete('/:rollno', 
                (req, res) =>
                {
          res.send('<h3>INSIDE TEACHER DELETE METHOD..TEACHER DELETE API ' + req.params.rollno + '</h3>');
                });

//SHOULD BE EXPORTED
module.exports = router;


