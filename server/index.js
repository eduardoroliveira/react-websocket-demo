const WebSocket = require("ws");
const fs = require("node:fs/promises");

const server = new WebSocket.Server({ port: 4646 });

server.on("connection", (ws, request) => {
  console.log("client connected");

  ws.on("close", () => console.log("client disconnected"));
  let data = "";
  let isDataUpdated = false;

  const readAnimals = () => {
    server.clients.forEach(async (client) => {
      const readData = await fs.readFile("./data.json");
      const dataAsString = readData.toString();

      if (dataAsString !== data) {
        console.log({ dataAsString });
        data = dataAsString;
        isDataUpdated = true;
      }

      if (client.readyState === WebSocket.OPEN && isDataUpdated) {
        console.log("sending data");
        client.send(data);
        isDataUpdated = false;
      }
    });
  };
  readAnimals();
  setInterval(readAnimals, 5000);
});
