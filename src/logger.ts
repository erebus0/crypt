import {createLogger, format, level, transports } from 'winston';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';
const logDir = '../log';

if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);

}

const logger = createLogger({
    level: env === 'development' ? 'debug' : 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH-mm-ss'
        }),
        format.printf(data => '${data.timestamp} - ${data.level}: ${data.message}')
    ),

    transports:[
        new transports.Console({
            level: 'debug'
        }),

        new transports.File({
            filename: '../../logs/information.log',
            level: 'info',
            dirname: 'logs'
        }),

        new transports.File({
            filename: '../../logs/error.log',
            level: 'error',
            dirname: 'logs'
        })

    ],
    exitOnError: false
});

export default logger;