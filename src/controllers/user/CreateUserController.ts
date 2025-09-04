import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { AppError } from "../../errors/appError";

class CreateUserController{
  async handle(req: Request, res: Response){
    try{
      const {name, email, password, isAdmin} = req.body;

      if(!name || !email || !password){
        throw new AppError("Valores inválidos...", 400);
      }

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        email,
        password,
        isAdmin,
      });

      res.status(201).json(user);
      
    }catch(err){
      console.error(err);
      if(err instanceof AppError){
        return res.status(err.statusCode).json({success: false, message: err.message});
      };
      return res.status(500).json({success: false, message: "Internal server error"});
    }
  }
}


export { CreateUserController }