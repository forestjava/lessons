
const http = require("http");

// Создаём список товаров
const products = [
  {
    id: 1,
    name: "Кофе",
    price: 4.50,
    description: "Ароматный молотый кофе"
  },
  {
    id: 2,
    name: "Чай",
    price: 2.80,
    description: "Зелёный листовой чай"
  },
  {
    id: 3,
    name: "Шоколад",
    price: 3.20,
    description: "Молочный шоколад"
  }
];

// Создаём сервер
const server = http.createServer((req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8"
    });

    res.end(JSON.stringify(products));

  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

// Запускаем сервер
server.listen(3000, () => {
  console.log("Сервер запущен: http://localhost:3000");
});
