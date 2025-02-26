let express = require('express');
require("dotenv").config();
let app = express();

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Hello SAHAYOGI!" });
});

app.get("/Platform", (req, res) => {
    res.send({ status: 1, msg: "Supply Chain Management!" });
});

app.get("/Resource", (req, res) => {
    res.send({ status: 1, msg: "Shipping rate calculator & Volumetric weight calculator" });
});

app.get("/Service", (req, res) => {
    res.send({ status: 1, msg: "Domestic & Cargo Shipping" });
});

app.get("/Trackorder", (req, res) => {
    res.send({ status: 1, msg: "Shipment not yet dispatched!!!" });
});

app.post("/Login", (req, res) => {
    res.send({ status: 1, msg: "Login Successfull" });
});

app.listen("8000")
