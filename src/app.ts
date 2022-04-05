import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  path: "/api",
});

app.get(
  "/api",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).json({
      message: "okey",
    });
  }
);
io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.emit("connection", "server connected");
});

httpServer.listen(3000, "localhost", () => {
  console.log("im up and running");
});
