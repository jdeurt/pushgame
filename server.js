const
    express = require("express"),
    http = require("http"),
    path = require("path"),
    socketIO = require("socket.io");

let app = express();
let server = http.Server(app);
let io = socketIO(server);

app.set("port", 8080);
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(8080, () => {
    console.log("Listening on port 8080!");
});
