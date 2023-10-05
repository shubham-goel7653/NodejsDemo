const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require('./Routers/route');
const authentication = require('./MiddleWare/auth');
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/add',authentication.auth)
app.use('/add',router)

app.listen(PORT, (err) => {
    if (err) console.log(`error while listening ${err}`);
    console.log(`server running on port ${PORT}`);
})