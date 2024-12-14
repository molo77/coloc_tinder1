import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Créer 20 colocataires
  const users = [];
  for (let i = 1; i <= 20; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
        age: 20 + i,
        image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`,
      },
    });
    users.push(user);
  }

  console.log(`✅ Created ${users.length} users`);

  // Créer 20 colocations
  const listings = [];
  for (let i = 1; i <= 20; i++) {
    const listing = await prisma.listing.create({
      data: {
        title: `Colocation ${i}`,
        description: `This is a description for colocation ${i}.`,
        location: `City ${i}`,
        price: 500 + i * 50,
        ownerId: users[i % users.length].id, // Assign to a random user
      },
    });
    listings.push(listing);
  }

  console.log(`✅ Created ${listings.length} listings`);
}

main()
  .then(() => {
    console.log('🌱 Database seeded successfully');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
