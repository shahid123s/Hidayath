import winston from 'winston';
import path from 'path';

// Define log levels
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Define log level based on environment
const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};

// Define colors for each level
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

// Tell winston that you want to link the colors
winston.addColors(colors);

// Custom format for logging
const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
);

// Define which transports the logger must use to print out messages.
const transports = [
    // Allow the use of the console to print the messages
    new winston.transports.Console(),

    // Allow to print all the error level messages inside the error.log file
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.combine(
            winston.format.uncolorize(),
            winston.format.json()
        )
    }),

    // Allow to print all the messages inside the all.log file
    new winston.transports.File({
        filename: 'logs/all.log',
        format: winston.format.combine(
            winston.format.uncolorize(),
            winston.format.json()
        )
    }),
];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

export default logger;
