import { createServer } from "./server";
import { log } from "logger";
import createDatabase from "./database/database";

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
  try {
    createDatabase();
  } catch (err) {
    log(err);
  }
});
