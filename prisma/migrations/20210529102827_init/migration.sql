-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "adress" TEXT,
    "category" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "card" TEXT,

    PRIMARY KEY ("id")
);
