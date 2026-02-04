-- Crear tabla tasks
CREATE TABLE IF NOT EXISTS "Tasks" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL CHECK (
        status IN ('PENDING', 'IN_PROGRESS', 'DONE')
    ),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Datos iniciales (opcional pero recomendado)
INSERT INTO "Tasks" (title, description, status)
VALUES
('Primera tarea', 'Descripcion inicial valida', 'PENDING'),
('Segunda tarea', 'Descripcion suficientemente larga', 'IN_PROGRESS');
