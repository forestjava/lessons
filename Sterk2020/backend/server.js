const http = require('http');

const PORT = 3000;

// Демонстрационный каталог: backend возвращает массив объектов JSON.
const products = [
  { id: 1, title: 'Уютная квартира с видом на море', price: 650, city: 'Bar', category: 'Недвижимость', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80' },
  { id: 2, title: 'iPhone 13, 128 GB', price: 280, city: 'Budva', category: 'Электроника', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80' },
  { id: 3, title: 'Диван раскладной, почти новый', price: 190, city: 'Podgorica', category: 'Мебель', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80' },
  { id: 4, title: 'Сантехник — выезд по побережью', price: 25, city: 'Bar', category: 'Сантехника', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80' },
  { id: 5, title: 'Volkswagen Golf 6 · 2011', price: 5900, city: 'Tivat', category: 'Транспорт', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80' },
  { id: 6, title: 'Профессиональная уборка квартир', price: 35, city: 'Kotor', category: 'Уборка', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80' },
  { id: 7, title: 'Набор инструментов для дома', price: 45, city: 'Sutomore', category: 'Товары для дома', image: 'https://images.unsplash.com/photo-1581147036324-c1c89c2c8a39?auto=format&fit=crop&w=700&q=80' },
  { id: 8, title: 'Перевозка вещей и небольшие переезды', price: 20, city: 'Herceg Novi', category: 'Перевозки', image: 'https://images.unsplash.com/photo-1600518464441-9306b1b9d7c5?auto=format&fit=crop&w=700&q=80' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'GET' && req.url === '/api/products') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(JSON.stringify(products));
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Маршрут не найден' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend запущен: http://localhost:${PORT}`);
  console.log(`API каталога: http://localhost:${PORT}/api/products`);
});
