-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("id", "email", "encryptedPassword", "firstname", "lastname", "birthdate", "gender", "createdAt", "updatedAt") SELECT "id", "email", "encryptedPassword", "firstname", "lastname", "birthdate", "gender", "createdAt", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
