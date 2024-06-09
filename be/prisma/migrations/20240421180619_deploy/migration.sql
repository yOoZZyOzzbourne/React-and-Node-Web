-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL DEFAULT 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg',
    "description" TEXT NOT NULL,
    "pictures" TEXT NOT NULL DEFAULT '',
    "userImages" TEXT NOT NULL DEFAULT '',
    "video" TEXT,
    "developerId" INTEGER NOT NULL,
    CONSTRAINT "Game_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "Developer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("description", "developerId", "icon", "id", "name", "pictures", "userImages", "video") SELECT "description", "developerId", "icon", "id", "name", "pictures", "userImages", "video" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE TABLE "new_Developer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT DEFAULT 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg'
);
INSERT INTO "new_Developer" ("icon", "id", "name") SELECT "icon", "id", "name" FROM "Developer";
DROP TABLE "Developer";
ALTER TABLE "new_Developer" RENAME TO "Developer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
