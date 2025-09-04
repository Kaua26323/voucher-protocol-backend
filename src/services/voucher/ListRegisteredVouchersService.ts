import { prismaClient } from "../../prisma";


class ListRegisteredVouchersService {
  async execute(){
    const vouchers = await prismaClient.voucher.findMany({
      orderBy: {
        date: "asc"
      }
    });

    const dayUse = vouchers.filter((val) => val.type === "Day_use");
    const hospedagem = vouchers.filter((val) => val.type === "Hospedagem");
    
    return {dayUse, hospedagem};
  }
}

export { ListRegisteredVouchersService };