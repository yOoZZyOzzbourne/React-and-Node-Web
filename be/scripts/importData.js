import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { games, developers } from "../src/data.js";

async function main() {
  console.log(`Start importing data...`);

  // Clear existing data
  await prisma.game.deleteMany({});
  await prisma.developer.deleteMany({});

  // Insert developers
  for (const developer of developers) {
    await prisma.developer.create({
      data: developer,
    });
  }

  // Insert games
  for (const game of games) {
    await prisma.game.create({
      data: {
        ...game,
        developer: {
          connect: { id: game.developer },
        },
      },
    });
  }

  console.log(`Data imported successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
