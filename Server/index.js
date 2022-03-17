const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(session({
    key: "userId",
    secret: "pwd",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000,
    },
}));


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "celular"
});


app.post('/register', (req, res,) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("Insert ignore into usuarios (user, password) values (?,?)",
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

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
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
            req.session.user = result;
            console.log(req.session.use);
            res.send(result);
        } else {
            res.send({ message: "Contraseña y/o usuario equivocado" })
        }
        
    }
    );
})

app.get('/select', (req, res) => {
    db.query("Select * from citas", (err, result) => {
        if (err) {
            console.log(err);
        }
            res.send(result);
    });
});

app.post('/appointment', (req, res) => {

    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const device = req.body.device;
    const description = req.body.description;
    const time = req.body.time;
    const date = req.body.date;

    db.query("Insert into citas (nombreCompleto, numeroTelefono, correo, dispositivo, descripcion, hora, fecha) values (?,?,?,?,?,?,?)",
    [name, phone, email, device, description, time, date],
    (err, result) => {
        if(err){
            res.send({ err: err });
        }
        
        if (result) {
            res.send(result);
        } else {
            res.send({ message: "Hubo un error al crear una cita" })
        }
        
    });
});

app.post('/shipment', (req, res) => {

    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const mail = req.body.mail;
    const address = req.body.address;
    const state = req.body.state;
    const city = req.body.city;
    const ZipCode = req.body.ZipCode;
    const product = req.body.product;
    const price = req.body.price;

    db.query("Insert into envios (nombre, apellido, correo, direccion, estado, ciudad, CP, producto, precio) values (?,?,?,?,?,?,?,?,?)",
    [FirstName, LastName, mail, address, state, city, ZipCode, product, price],
    (err, result) => {
        if(err){
            res.send({ err: err });
        }
        
        if (result) {
            res.send(result);
        } else {
            res.send({ message: "Hubo un error al crear el envio" })
        }
        
    });
});

app.get('/selectShipment', (req, res) => {
    db.query("Select * from envios", (err, result) => {
        if (err) {
            console.log(err);
        }
            res.send(result);
    });
});

app.post('/logout', (req, res) => {
    req.session.destroy()
});

app.listen(3001, () => {
    console.log("server running");
});