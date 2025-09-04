import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { DeleteVoucherService } from "../../services/voucher/DeleteVoucherService";

class DeleteVoucherController {
  async handle(req: Request, res: Response){
    try{
      const { id } = req.params;

      if(!id){
        throw new AppError("Id Inválido!", 400);
      }

      const deleteVoucherService = new DeleteVoucherService();

      const deletedVoucher = await deleteVoucherService.execute({
        id,
      });

      return res.status(200).json({success: true, message: "Voucher deletado com sucesso!"});

    }catch(err){
      console.error(err)

      if(err instanceof AppError){
        return res.status(err.statusCode).json({success: false, message: err.message});
      };

      return res.status(500).json({success: false, message: "Internal server error"});
    }
  }
}

export { DeleteVoucherController };