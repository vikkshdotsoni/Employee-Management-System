// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

// BROWSER URL :- localhost:3000/admin 
// CALLBACK using Arrow Operator 
router.get('/', (req, res) => {
  res.send('<h3>INSIDE ADMIN GET METHOD..ADMIN DISPLAY API</h3>');
});


// BROWSER URL :- localhost:3000/admin/20
router.get('/student/:rollno', (req, res) => {
  res.send('<h3>INSIDE ADMIN SEARCH STUDENT API ' + req.params.rollno + '</h3>');
});

router.get('/teacher/:empid', (req, res) => {
  res.send('<h3>INSIDE ADMIN SEARCH TEACHER API ' + req.params.empid + '</h3>');
});


// BROWSER URL :- localhost:3000/admin  (USING POSTMAN POST)
// post is used to INSERT DOCUMENT/RECORD
router.post('/registration', (req, res) => {
  res.send('<h3>INSIDE ADMIN POST REGISTRATION API</h3>');
});

router.post('/login', (req, res) => {
  res.send('<h3>INSIDE ADMIN POST LOGIN API</h3>');
});


// BROWSER URL :- localhost:3000/admin/20     (USING POSTMAN DELETE)
//DELETE
router.delete('/student/:rollno',
  (req, res) => {
    res.send('<h3>INSIDE ADMIN DELETE METHOD..ADMIN DELETE API ' + req.params.rollno + '</h3>');
  });

//BROWSER URL :- localhost:3000/admin/40   (USING POSTMAN UPDATE)
//UPDATE 
router.put('/student/:rollno', (req, res) => {
  res.send('<h3>INSIDE ADMIN PUT METHOD..ADMIN UPDATE API ' + req.params.rollno + '</h3>');
});

//SHOULD BE EXPORTED
module.exports = router;


