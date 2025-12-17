CREATE TABLE regalos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    destinatario VARCHAR(100),
    precio DECIMAL(10, 2),
    entregado BOOLEAN DEFAULT FALSE
);

INSERT INTO regalos (nombre, descripcion, destinatario, precio, entregado) VALUES
('Libro de recetas', 'Libro con recetas navideñas', 'Ana', 25.50, false),
('Bufanda', 'Bufanda roja de lana', 'Carlos', 15.00, true),
('Set de té', 'Tazas y té gourmet', 'Lucía', 30.00, false),
('Juegos de mesa', 'Juego de mesa clásico', 'Miguel', 40.00, true),
('Velas aromáticas', 'Velas con aroma a canela', 'Sofía', 12.00, false);