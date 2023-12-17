const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser'); // Import body-parser
dotenv.config();

const app = express();
app.use(cors())
const database = require('./database');
const user = require('./routes/userRoute');

app.use(bodyParser.json());

user(app);
database.db;

app.listen(process.env.PORT, () => {
  console.log(`Server Running At ${process.env.PORT}`);
});
