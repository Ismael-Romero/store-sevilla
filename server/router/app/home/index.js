const path = require("path");


const routeHome = (req, res) => {
    res.sendFile(path.resolve(__dirname, process.env.SRV_PATH_SITE));
}

module.exports = routeHome;