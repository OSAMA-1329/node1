// /

// const userData = [
//   {
//     Name: "mro",
//     No: "mro@gmail.com",
//     Address: {
//       no: "104",
//       street: "vivenkanandar stree, dubai main road",
//       City: "dubai",
//     },
//   },

//   {
//     Name: "mro",
//     No: "mro@gmail.com",
//     Address: {
//       no: "104",
//       street: "vivenkanandar stree, dubai main road",
//       City: "dubai",
//     },
//   },
//   {
//     Name: "mro",
//     No: "mro@gmail.com",
//     Address: {
//       no: "104",
//       street: "vivenkanandar stree, dubai main road",
//       City: "dubai",
//     },
//   },
// ];

const http = require("http");

const PORT = 8000;
const fs = require("fs");

let server = new http.createServer((req, res) => {
  try {
    // fs.writeFileSync("assets/sample.doc", "done write and rewrite", "utf-8");
    fs.appendFileSync("assets/sample.doc", " mooduda", "utf-8");

    let data = fs.readFileSync("assets/sample.doc", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    res.end(data);
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "content-type": "text/html" });
    res.end(`Error occured ${error.message}`);
  }
});

server.listen(PORT, () => console.log("Server connected to the sever 8000"));
