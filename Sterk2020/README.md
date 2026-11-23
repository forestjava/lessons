# Рядом — Черногория (frontend + backend)

Учебный проект: backend отдаёт список абстрактных товаров и услуг в формате JSON, frontend получает этот массив по HTTP и отображает элементы карточками.

## Структура проекта

```text
sterk2020/
├── backend/
│   └── server.js
├── frontend/
│   └── index.html
└── README.md
```

## Требования

- Node.js 18 или новее для backend.
- Python 3 для простого статического HTTP-сервера frontend (либо любой другой static file server).

## 1. Запуск backend

Из корневого каталога `sterk2020` выполните:

```bash
node backend/server.js
```

Backend запустится на `http://localhost:3000`.

Метод и маршрут:

```text
GET http://localhost:3000/api/products
```

Ответ — JSON-массив объектов с полями `id`, `title`, `price`, `city`, `category`, `image`.

Проверить API можно в браузере, открыв `http://localhost:3000/api/products`.

## 2. Запуск frontend (раздача статики)

Откройте второй терминал в корневом каталоге `sterk2020` и выполните:

```bash
python3 -m http.server 5500 --directory frontend
```

На Windows, если команда `python3` не найдена, используйте:

```bash
py -m http.server 5500 --directory frontend
```

Откройте в браузере `http://localhost:5500`.

## Как работает обмен данными

1. Frontend выполняет `fetch('http://localhost:3000/api/products')`.
2. Backend возвращает JSON-массив объектов.
3. Frontend фильтрует полученные объекты и отображает их карточками.

Backend использует встроенный модуль Node.js `http`, поэтому устанавливать npm-пакеты не требуется. Данные пока демонстрационные и хранятся в массиве в `backend/server.js`; база данных и создание объявлений через API в рамках этого задания не реализованы.
