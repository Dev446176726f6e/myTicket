import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipe/validation.pipe";

async function start() {
  try {
    const PORT = process.env.PORT || 3030;
    console.log(PORT);
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalPipes(new CustomValidationPipe());
    await app.listen(PORT, () => {
      console.log(`Server working at: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
