
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutees = require('./Routers/admin')
const shopRoutes = require('./Routers/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutees);
app.use(shopRoutes);

app.use((req , res , next) => {

    res.status(404).send('<h1>Page not found</h1>');

})

app.listen(2000);
