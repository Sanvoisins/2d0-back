-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "isComplete" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "gender" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
