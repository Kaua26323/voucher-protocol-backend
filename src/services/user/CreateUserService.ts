import { prismaClient } from "../../prisma";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";

interface UserRequest {
  name:     string;
  email:    string;
  password: string;
  isAdmin:  boolean;
}

class CreateUserService {
  async execute({name, email, password, isAdmin}: UserRequest){

    const emailAlreadyExists = await prismaClient.user.findUnique({
      where:{
        email: email
      }
    });

    const nameAlreadyExists = await prismaClient.user.findUnique({
      where: {
        name: name,
      }
    });

    if(emailAlreadyExists || nameAlreadyExists){
      throw new AppError("Esse usuário já existe", 400);
    };

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name:     name,
        email:    email,
        password: passwordHash,
        isAdmin:  isAdmin,
      },
      
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
      }
    });

    return user;
    
  }
}

export { CreateUserService };  