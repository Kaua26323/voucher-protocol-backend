import { prismaClient } from "../../prisma"


interface VoucherRequest{
  id: string
};

class DeleteVoucherService{
  async execute({ id }: VoucherRequest){

    const deleted = await prismaClient.voucher.delete({
      where: {
        id: id,
      }
    });

    return deleted;
  }
}

export { DeleteVoucherService };