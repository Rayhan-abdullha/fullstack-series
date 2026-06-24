import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";
import "dotenv/config";
const PORT = config.port;
async function main() {
  try {
    // await prisma.$connect();
    console.log("Connected to the database successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // await prisma.$disconnect();
    console.error("Failed to connect to the database");
    console.error(error);
  }
}

main();
