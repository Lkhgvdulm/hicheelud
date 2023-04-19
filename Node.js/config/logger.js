const {createLogger,transports,format}= require("winston");

const logger = createLogger({
    transports:[                   // tohirgooni heseg huwisagch ymaa 
        new transports.File({
            filename:"customer.log",
            level:"info",
            format: format.combine(format.timestamp(), format.json()),
        }),
    ],
});

module.exports = logger;
