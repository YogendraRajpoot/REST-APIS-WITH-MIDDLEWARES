const app = require("./app");
const http = require("http");
const PORT = 9001;

http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port :-${PORT} `);
});
