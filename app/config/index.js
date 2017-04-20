/**
 * Created by chenkang1 on 2017/4/20.
 */

let config;

switch (process.env) {
    case "local":
        config = require("./config.local.js").config
    case "qa":
        config = require("./config.qa.js").config
    case "prod":
        config = require("./config.prod.js").config
    default:
        config = require("./config.local.js").config
}

export default config;
