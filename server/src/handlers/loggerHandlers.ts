import winston from 'winston';

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.json()
});

export default Logger;