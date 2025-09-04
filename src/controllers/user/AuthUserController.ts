import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response){
    try{
      const {name, password} = req.body;

      if(!name || !password){
        throw new AppError("valores invalidos", 400);
      };

      const authUserService = new AuthUserService();

      const auth = await authUserService.execute({
        name: name,
        password: password,
      });

      res.status(200).json(auth);

    }catch(err){
      console.error(err);

      if(err instanceof AppError){
        return res.status(err.statusCode).json({success: false, message: err.message});        
      };

      return res.status(500).json({success: false, message: "Internal server error..."});
    }    
  }
}
export { AuthUserController };