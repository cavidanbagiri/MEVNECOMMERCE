
const express = require('express');
const app = express();
const cors = require('cors');

//****************  Import DOTENV **************************************//
const dotenv = require('./configs/config');
//**********************************************************************//


//****************  Import Database Connection *************************//
const {connectDB} = require('./loaders');
connectDB();
//**********************************************************************//

//****************  Import Routes **************************************//
app.use(express.json());
app.use(cors());
//**********************************************************************//


//****************  Import Routes **************************************//
const {UserRouter, ProductRouter} = require('./routes');
//**********************************************************************//

//****************  Using Routes ***************************************//
app.use('/user',UserRouter);
app.use('/catalog',ProductRouter);
//**********************************************************************//

app.listen(3000,()=>{
    console.log('Listen 3000 port');
});


