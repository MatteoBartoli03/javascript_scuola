const express = require('express') 
const app = express() 
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')


app.use(bodyParser.urlencoded({ extended: false }));


//connection database
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'registro'
})

db.connect((err) => {
  if (err) {
    throw(err)
  }
  console.log("database connesso..")
})


//pages
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/pages/home.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/pages/login.html');
});

app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (email && password) {
		db.query('SELECT * FROM students WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
			if (results.length > 0) {
				//request.session.loggedin = true;
				//request.session.username = username;
				res.redirect('/home');
			} else {
        res.redirect('back');
			}			
			res.end();
		});
	} 
});



//deve stare ultimo
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/pages/pageNotFound.html');
});


const port = 3000 
app.listen(port, () => console.log(`app in ascolto sulla porta ${port}`));