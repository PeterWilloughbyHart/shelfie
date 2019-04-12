require("dotenv").config();
const massive = require("massive");
const express = require("express");
const {read, post, remove} = require('./controller/controller');
const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
})
app.use(express.json());

const url = "/api/inventory";
app.get(url, read);
app.post(url, post);
app.delete(`${url}/:id`, remove);
// app.put(`${url}/:id`, update);


const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.listen(SERVER_PORT, console.log("mic check one two"));