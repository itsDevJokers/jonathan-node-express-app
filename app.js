const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const router = require('./routes');
const log = require('./middleware/logger');
const port = process.env.PORT || 8080;

app.use(cors());
app.use(log);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(router);

app.listen(port)