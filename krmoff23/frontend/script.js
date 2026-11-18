
const productsContainer = document.getElementById("products");

// Получаем товары с сервера
async function loadProducts() {
    try {
        const response = await fetch(
            "http://localhost:3000/api/products"
        );

        if (!response.ok) {
            throw new Error("Ошибка загрузки товаров");
        }

        const products = await response.json();

        // Создаём карточку для каждого товара
        products.forEach((product) => {
            const card = document.createElement("div");

            card.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <strong>${product.price} €</strong>
            `;

            productsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Ошибка:", error);
        productsContainer.textContent =
            "Не удалось загрузить товары";
    }
}

loadProducts();
