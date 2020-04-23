const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const logger = require('./middleware/logger')

//Route files
const bootcamps = require('./routes/bootcamps');



//load config file
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//Mount roters
app.use('/api/v1/bootcamps', bootcamps);





const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running in ${ process.env.NODE_ENV } mode on port ${ PORT}`));