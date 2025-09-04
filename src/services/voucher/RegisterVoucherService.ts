import { prismaClient } from "../../prisma";

interface VoucherRequest{
  data:        string;
  type:        string;
  isComplete:  boolean;
  description?: string;
  lastUser:    string;
}

class RegisterVoucherService{
  async execute({data, isComplete, type, description, lastUser}: VoucherRequest){

    try{
      const created = await prismaClient.voucher.create({
        data: {
          date: data,
          type: type,
          isComplete: isComplete,
          description: description,
          lastUser: lastUser,
        },
      }); 

    return created;

    }catch(err){  
      console.error(err);
      console.log(err);
      throw err;
    }

    
  }
}

export { RegisterVoucherService };