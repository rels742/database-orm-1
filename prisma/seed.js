const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      phone: "05121911618",
      email: "elsa@prisma.io",
      customerId: createdCustomer.id,
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Nope",
      runtimeMins: 130,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("August 27, 2022 12:00:00"),
      movieId: createdMovie.id,
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
