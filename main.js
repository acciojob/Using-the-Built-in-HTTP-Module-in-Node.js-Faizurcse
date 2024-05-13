const http = require("http");
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Faiz!\n");
});


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)
