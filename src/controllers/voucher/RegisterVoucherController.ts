import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { RegisterVoucherService } from "../../services/voucher/RegisterVoucherService";


class RegisterVoucherController {
  async handle(req: Request, res: Response){
    const {data, isComplete, type, description, lastUser} = req.body;

    try{
      
      if(!data || !lastUser || !type){
        throw new AppError("Valores invalidos", 400);
      };

      const registerVoucherService = new RegisterVoucherService();

      const register = await registerVoucherService.execute({
        data,
        type,
        isComplete,
        description,
        lastUser,
      });
      
    return res.status(201).json({success: true, message: "Voucher cadastrado com sucesso!"});

    }catch(err){
      console.error(err);
      console.log(err);

      if(err instanceof AppError){
        return res.status(err.statusCode).json({success: false, message: err.message});
      };

      return res.status(500).json({success: false, message: "Internal server error"});
    }
  }
}

export { RegisterVoucherController };