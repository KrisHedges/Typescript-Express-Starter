"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
process.title = "typescript-express-rest";
var port = 8000;
app_1.default.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
//# sourceMappingURL=server.js.map