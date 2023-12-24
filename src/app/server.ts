import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);

    server = app.listen(config.PORT, () => {
      console.log(`app is listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
