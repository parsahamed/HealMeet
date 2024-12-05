import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@healmeet.com' },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: 'admin@healmeet.com',
        password:
          '$2b$10$GHh8.Dv8VJYEUEO0zc0rH.RGrPFHWBg0G9aFjhXD2hLqAUAesVWC2',
        role: 'admin',
        isVerified: true,
      },
    });
    console.log('Default admin user created: admin@healmeet.com / admin123');
  } else {
    console.log('Admin user already exists.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
