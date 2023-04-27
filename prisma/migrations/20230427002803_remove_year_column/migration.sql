/*
  Warnings:

  - You are about to drop the column `year` on the `Gallery` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gallery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Gallery" ("address", "email", "id", "name") SELECT "address", "email", "id", "name" FROM "Gallery";
DROP TABLE "Gallery";
ALTER TABLE "new_Gallery" RENAME TO "Gallery";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
