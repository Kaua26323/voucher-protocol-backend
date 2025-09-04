import { compare } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { prismaClient } from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest{
  name:     string;
  password: string;
}

class AuthUserService {
  async execute({name, password}: AuthRequest){

    const user = await  prismaClient.user.findUnique({
      where: {
        name: name,
      }
    });

    if(!user){
      throw new AppError("Nome/Senha incorretos", 400);
    };

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Nome/Senha incorretos", 400);
    };

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JMT_SECRET as string,
      {
        subject: user.id,
        expiresIn: "30d"
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}


export { AuthUserService }