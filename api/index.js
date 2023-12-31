const express = require('express');
require('dotenv').config();
const path = require('path');



const app = express();
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log("Connected to backend");
});
