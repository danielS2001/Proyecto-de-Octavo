const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "celular"
});


app.post('/register', (req, res,) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("Insert into usuarios (user, password) values (?,?)",
    [username, password],
    (err, result) => {
        if(err){
            res.send({ err: err });
        }
        
        if (result) {
            res.send(result);
        } else {
            res.send({ message: "Hubo un error al crear un usuario" })
        }
        
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("Select * from usuarios where user = ? and password= ?",
    [username, password],
    (err, result) => {
        if(err){
            res.send({ err: err });
        }
        
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "Contraseña y/o usuario equivocado" })
        }
        
    }
    );
})

// app.get('/select', (req, res) => {
//     db.query("Select * from usuarios", (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//             res.send(result);
//     });
// });

// app.post('/insert', (req, res) => {

//     const user = "daniel";
//     const password = "123";

//     db.query('insert into usuarios(user, password) values (?, ?)',
//     [user, password],
//     (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//             res.send(result);
//     })
// })

app.listen(3001, () => {
    console.log("server running");
});