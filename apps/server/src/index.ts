import { createServer } from "./server";
import { log } from "logger";
import createDatabase from "./database/database";

const server = createServer();
const port = process.env.PORT || 5001;

(async () => {
  try {
    await createDatabase();
    log("Connected to the database");

    server.listen(port, () => {
      log(`Server running on port ${port}`);
    });
  } catch (err) {
    log(err);
  }
})();
