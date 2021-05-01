// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
var router = express.Router();

// BROWSER URL :- localhost:3000/student 
// CALLBACK using => 
router.get('/', (req, res) => 
                {
                  res.send('<h3>INSIDE STUDENT GET METHOD..STUDENT DISPLAY API</h3>');
                });



// BROWSER URL :- localhost:3000/student  (USING POSTMAN POST)
// post is used to INSERT DOCUMENT/RECORD
router.post('/', (req, res) => 
                 {
          res.send('<h3>INSIDE STUDENT POST METHOD..STUDENT INSERT API</h3>');
                });


//BROWSER URL :- localhost:3000/student/40   (USING POSTMAN UPDATE)
//UPDATE 
router.put('/:rollno', (req, res) => 
                      {
                        res.send('<h3>INSIDE STUDENT PUT METHOD..STUDENT UPDATE API '+ req.params.rollno +'</h3>');
                      });

//SHOULD BE EXPORTED
module.exports = router;


