import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTask = async (idUser: number, newTask: any) => {
    const task = await prisma.task.create({
        data: {
            content: newTask.content,
            isComplete: false,
            userId: idUser,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    });
    return task;
};

const completeTask = async (taskId: number) => {
    const task = await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            isComplete: true
        }
    });
    return task;
};

const deleteTask = async (taskId: number) => {
    const task = await prisma.task.delete({
        where: {
            id: taskId
        }
    });
    return task;
};

const getTaskByUser = async (idUser: number) => {
    const task = await prisma.task.findMany({
        where: {
            userId: idUser
        }
    });
    return task;
};

export { createTask, completeTask, deleteTask, getTaskByUser };