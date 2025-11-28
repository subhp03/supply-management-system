import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const demouserId = "9a7b9649-d777-4d1d-be49-954e28943644";

    // Create Sample Products
      await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demouserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });

  console.log("Seed data created successfully!");
  console.log(`Created 25 products for user ID: ${demouserId}`);
}