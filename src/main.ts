import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = process.env.PORT || 3030
    console.log(PORT);
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, ()=> {
      console.log(`Server working at: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
