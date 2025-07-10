const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("✅ Berhasil konek ke database"))
  .catch(err => console.error("❌ Gagal konek database:", err));

module.exports = prisma;
