
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bodyParser = require('body-parser');
const sequelize = require('./util/database');


const app = express();
const path = require('path');

const userRoutes = require('./routes/users');
const propertyRoutes = require('./routes/property');


const User = require('./models/user');
const Property = require('./models/property');



app.use(cors());
app.use(bodyParser.json({extended : false}));
app.use(userRoutes);
app.use(propertyRoutes);


app.use((req,res) => {
  res.sendFile(path.join(__dirname,`${req.url}`));  
});

User.hasMany(Property);
Property.belongsTo(User,{constraints:true, onDelete : 'CASCADE'});

sequelize.sync()
.then(result => {
app.listen(3000);
})
.catch(err => console.log(err));

