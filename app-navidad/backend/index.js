const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());

app.get("/regalos", async (req, res) => {
  const result = await pool.query("SELECT * FROM regalos");
  res.json(result.rows);
});

app.listen(3000, async () => {
  console.log("🎄 Backend en puerto 3000");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS regalos (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(50),
      destinatario VARCHAR(50),
      precio NUMERIC,
      categoria VARCHAR(30),
      fecha DATE
    );
  `);

  const count = await pool.query("SELECT COUNT(*) FROM regalos");
  if (count.rows[0].count == 0) {
    await pool.query(`
      INSERT INTO regalos (nombre, destinatario, precio, categoria, fecha) VALUES
      ('PlayStation 5', 'Carlos', 499.99, 'Electrónica', '2025-12-24'),
      ('Bufanda', 'Ana', 19.99, 'Ropa', '2025-12-24'),
      ('Libro', 'Lucía', 14.50, 'Educación', '2025-12-24'),
      ('Bicicleta', 'Juan', 299.99, 'Deporte', '2025-12-24'),
      ('Perfume', 'María', 59.99, 'Belleza', '2025-12-24');
    `);
  }
});
