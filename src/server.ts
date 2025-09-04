import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";
import { AppError } from "./errors/appError";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error("🔥", err);

  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  };

  if(err instanceof Error) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  };

  return res.status(500).json({
    success: false,
    message: "internal server error."
  });
})

app.listen(process.env.PORT || 3333, () => console.log(`Servidor online em ${process.env.PORT}`));