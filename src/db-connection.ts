import mongoose from 'mongoose';
import logger from './logger';

mongoose.set('useCreateIndex', true);

const dbConection = mongoose.connect("mongodb://localhost:27017/CRYPT", { useNewUrlParser: true, userUnifiedTopology: true }, (error) => {
    if (error){
        logger.error('error connecting to database!');

    } else {
        logger.debug('sucessfully connected to database');
    }
});


export default dbConection;