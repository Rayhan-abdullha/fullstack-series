import app from "./app/app.js";
import config from "./config/index.js";
import { initDB } from "./db/index.js";

const main = async () => {
  initDB();
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
};
main().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
