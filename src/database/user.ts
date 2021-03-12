import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const getUser = async (userEmail: string, userPassword: string) => {
    const user = await prisma.user.findFirst({
        where: {
          email: userEmail,
          encryptedPassword: userPassword
        },
      });
      if(user !== null) {
          return true;
      } else {
          return false;
      };
}

const createUser = async (newUser: any) => {
    const user = await prisma.user.create({
        data:{
            email: newUser.email,
            encryptedPassword: newUser.password,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            birthdate: new Date(),
            gender: newUser.gender,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    });
    if(user !== null) {
        return true;
    } else {
        return false;
    };
}

export { getUser, createUser };