"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.status(200).send({
                message: "You can post a JSON Object containing a 'message' key to this URL to get it echoed back to you."
            });
        });
        router.post('/', function (req, res) {
            var data = req.body;
            if (data.message) {
                res.status(200).send({ message: "Here's your message: " + data.message });
            }
            else {
                res.status(500).send({ error: "You needed to send a JSON object with a 'message' key " });
            }
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map