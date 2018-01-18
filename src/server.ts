import app from "./app";
process.title = "typescript-express-rest";
const port = 8000;
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});