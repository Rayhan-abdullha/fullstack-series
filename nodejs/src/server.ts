import { createServer, Server } from "node:http";
import app from "./app";
const port: number = 5000;
const server: Server = createServer(app);

server.listen(port, () => console.log("server is running..."));
