import express from "express";
import * as http from "http"
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")))

app.get("/", (req, res) => {
    return res.sendFile(join(__dirname, 'index.html'));
})

io.on("connected", (socket) => {
    console.log(2)
    console.log("Data is uploaded");

    socket.on("user-message", (message) => {
        console.log('message: ' + message);
        io.emit("user-message", message);
    })
})

app.listen(9000, () => {
    console.log("Running on port : 9000")
})

