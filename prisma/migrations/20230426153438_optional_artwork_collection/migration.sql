-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artwork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "pieces" INTEGER NOT NULL,
    "Price" INTEGER NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "collectionId" INTEGER,
    CONSTRAINT "Artwork_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Artwork_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Artwork" ("Price", "collectionId", "createdAt", "description", "id", "image", "medium", "pieces", "size", "title", "type", "userId") SELECT "Price", "collectionId", "createdAt", "description", "id", "image", "medium", "pieces", "size", "title", "type", "userId" FROM "Artwork";
DROP TABLE "Artwork";
ALTER TABLE "new_Artwork" RENAME TO "Artwork";
CREATE UNIQUE INDEX "Artwork_userId_key" ON "Artwork"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
