import { AppError } from "../../errors/appError";
import { prismaClient } from "../../prisma"


class DetailsUserService{
  async execute(user_id: string){

    if(!user_id){
      throw new AppError("Faça login para continuar", 401);
    };
    
    const user = await prismaClient.user.findUnique({
      where: {
        id: user_id,
      },
      select: {
        id:      true,
        name:    true,
        email:   true,
        isAdmin: true,
      }
    });

    return user;
  }
}

export { DetailsUserService }