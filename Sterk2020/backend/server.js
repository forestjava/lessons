const http = require('http');
const { Pool } = require('pg');

const PORT = 3000;

const pool = new Pool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || 'sterk2020',
  user: process.env.DB_USER || 'sterkuser',
  password: process.env.DB_PASSWORD || 'sterkpass'
});

function send(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const path = new URL(req.url, 'http://localhost').pathname;

  if (path === '/api/products' && req.method === 'GET') {
    try {
      const result = await pool.query(
        'SELECT id, title, price, city, category, image FROM products ORDER BY id'
      );

      const products = result.rows.map(item => ({
        ...item,
        price: Number(item.price)
      }));

      return send(res, 200, products);
    } catch (error) {
      console.error(error);
      return send(res, 500, { error: 'Ошибка получения товаров' });
    }
  }

  if (path === '/api/products' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', async () => {
      try {
        const product = JSON.parse(body);

        const title = String(product.title || '').trim();
        const city = String(product.city || '').trim();
        const category = String(product.category || '').trim();
        const image = String(product.image || '');
        const price = Number(product.price);

        if (!title || !city || !category ||
            product.price === '' || product.price == null ||
            !Number.isFinite(price) || price < 0) {
          return send(res, 400, { error: 'Проверьте заполнение полей' });
        }

        const result = await pool.query(
          `INSERT INTO products (title, price, city, category, image)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING id, title, price, city, category, image`,
          [title, price, city, category, image]
        );

        return send(res, 201, {
          ...result.rows[0],
          price: Number(result.rows[0].price)
        });
      } catch (error) {
        console.error(error);
        return send(res, 400, { error: 'Некорректные данные товара' });
      }
    });

    return;
  }

  return send(res, 404, { error: 'Маршрут не найден' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend запущен на порту ${PORT}`);
  console.log(`Каталог: http://localhost:${PORT}/api/products`);
});
