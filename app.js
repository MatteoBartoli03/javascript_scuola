const express = require('express') 
var session = require('express-session');
const bodyParser = require('body-parser')
const path = require('path')
const mysql = require('mysql')

const app = express() 

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


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


//pages
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.sendFile(__dirname + '/pages/home.html');
	} else {
		res.sendFile(__dirname + '/pages/errors/notLoggedIn.html');
	}
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
				req.session.loggedin = true;
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
  res.sendFile(__dirname + '/pages/errors/pageNotFound.html');
});


const port = 3000 
app.listen(port, () => console.log(`app in ascolto sulla porta ${port}`));