const clientConfig = require("./webpack/client.config");
const serverConfig = require("./webpack/server.config");

(() => {
    console.log("process.env", process.env);
    if (process.env.SERVER) {
        module.exports = serverConfig;
        return;
    }

    module.exports = clientConfig;
})();
