CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price NUMERIC(12,2) NOT NULL CHECK (price >= 0),
    city TEXT NOT NULL,
    category TEXT NOT NULL,
    image TEXT NOT NULL DEFAULT ''
);

INSERT INTO products (id, title, price, city, category, image)
VALUES
(1, 'Уютная квартира с видом на море', 650, 'Bar', 'Недвижимость', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80'),
(2, 'iPhone 13, 128 GB', 280, 'Budva', 'Электроника', 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80'),
(3, 'Диван раскладной, почти новый', 190, 'Podgorica', 'Мебель', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80'),
(4, 'Сантехник — выезд по побережью', 25, 'Bar', 'Сантехника', 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80'),
(5, 'Volkswagen Golf 6 · 2011', 5900, 'Tivat', 'Транспорт', 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80'),
(6, 'Профессиональная уборка квартир', 35, 'Kotor', 'Уборка', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80'),
(7, 'Набор инструментов для дома', 45, 'Sutomore', 'Товары для дома', 'https://images.unsplash.com/photo-1581147036324-c1c89c2c8a39?auto=format&fit=crop&w=700&q=80'),
(8, 'Перевозка вещей и небольшие переезды', 20, 'Herceg Novi', 'Перевозки', 'https://images.unsplash.com/photo-1600518464441-9306b1b9d7c5?auto=format&fit=crop&w=700&q=80')
ON CONFLICT (id) DO NOTHING;

SELECT setval(
    pg_get_serial_sequence('products', 'id'),
    GREATEST((SELECT COALESCE(MAX(id), 1) FROM products), 1),
    true
);
