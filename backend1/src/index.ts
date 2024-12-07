import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws: any) {
  ws.on("error", console.error);

  ws.on("message", function message(data: any) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
