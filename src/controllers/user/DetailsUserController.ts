import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";
import { AppError } from "../../errors/appError";

class DetailsUserController {
  async handle(req: Request, res: Response){
    try{
      const user_id = req.user_id;
    
      const detailsUserService = new DetailsUserService();

      const user = await detailsUserService.execute(user_id);

      return res.status(200).json(user);

    } catch(err){

      console.error(err);
      
      if(err instanceof AppError){
        return res.status(err.statusCode).json({success: false, message: err.message});
      };
      return res.status(500).json({success: false, message: "Internal server error"});
    }
  }
}

export { DetailsUserController };

