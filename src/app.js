require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pengaduanRouter = require('./routes/pengaduan.route');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/pengaduan', pengaduanRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server berjalan di http://0.0.0.0:${PORT}`);
});

 process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection (global):", err);
});

process.on("uncaughtException", (err) => {
  console.error("🔥 Uncaught Exception (global):", err);
});
