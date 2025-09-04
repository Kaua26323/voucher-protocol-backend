import { Request, Response } from "express";
import { ListRegisteredVouchersService } from "../../services/voucher/ListRegisteredVouchersService";
import { AppError } from "../../errors/appError";


class ListRegisteredVouchersController{
  async handle(req: Request, res: Response){

    try{
      const registeredVouchers = new ListRegisteredVouchersService();

      const vouchers = await registeredVouchers.execute();

      return res.status(200).json(vouchers);

    }catch(err){
      console.error(err);
      
      if(err instanceof AppError){
        res.status(err.statusCode).json({success: false, message: err.message});
      };

      return res.status(500).json({success: false, message: "Internal server error"});
    };
  }
}

export { ListRegisteredVouchersController }
