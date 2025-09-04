import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

class IsAuthController {
  async handle(req: Request, res: Response){
    try{
      const userId = req.user_id;
      return res.status(200).json(userId);
      
    }catch(err){
      console.error(err);
      if(err instanceof AppError){
        return res.status(err.statusCode).json(err.message);
      };

      return res.status(500).json({success: false, message: "Internal server error"});
    }
  }
}

export { IsAuthController };