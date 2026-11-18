
# Product Catalog

Домашнее задание: Backend + Frontend.

## Описание

Приложение отображает каталог товаров.

Backend написан на Node.js и возвращает список
товаров в формате JSON.

Frontend написан на HTML, CSS и JavaScript.
Он получает товары с backend через fetch()
и отображает их в виде карточек.

## Запуск Backend

Требуется установленный Node.js.

Перейти в папку backend:

```bash
cd krmoff23/backend
```

Запустить сервер:

```bash
node server.js
```

API:
http://localhost:3000/api/products

## Запуск Frontend

Требуется установленный Node.js и npm.

Из корня репозитория перейти в папку frontend:

```bash
cd krmoff23/frontend
```

Запустить статический сервер:

```bash
npx.cmd --yes http-server . -p 5500 -c-1
```

Открыть в браузере:
http://localhost:5500

Важно: Backend должен быть запущен
одновременно с Frontend.
