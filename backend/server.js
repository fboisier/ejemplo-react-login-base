const express = require('express');
const dotenv = require('dotenv').config(); 
const app = express();
const cors = require('cors')
require('./config/mongoose.config');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routers/usuario.route')(app);

app.listen(process.env.PORT, () => {
    console.log("Listening at Port " + process.env.PORT);
});