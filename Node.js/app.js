const express = require("express");

const app = express();
const logger = require("./config/logger")
const homeRouter = require("./routes/home_page");

// app.use("/home_page", (req, res) => {
//     res.write("<h2>Ene bol nuur huuds</h2>");
//     res.end();
// });

// app.use("/home_pages", homeRouter);

const port = process.env.PORT || 3000;

// app.listen(port,() => {               // portiin dugaara bichij ugj bn
//     console.log("info",`server ${port} port deer amjiilttai aslaa`)
// }); 

app.listen(port, () => {               // portiin dugaara bichij ugj bn
    logger.log("info",`server ${port} port deer amjiilttai aslaa`)
});

