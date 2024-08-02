let products = [
    {
        id: 1,
        name: "Hair Shampoo",
        image: "./img/1.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, omnis.",
        price: 120,
        count: 63,
    },
    {
        id: 2,
        name: "Hair Conditioner",
        image: "./img/2.webp",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, omnis.",
        price: 423,
        count: 12,
    },
    {
        id: 3,
        name: "Soap",
        image: "./img/3.jpeg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, omnis.",
        price: 74,
        count: 8,
    },
    {
        id: 4,
        name: "Liquid Soap",
        image: "./img/4.jpeg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, omnis.",
        price: 96,
        count: 14,
    },
    {
        id: 5,
        name: "Hair Mask",
        image: "./img/5.webp",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, omnis.",
        price: 230,
        count: 23,
    },
];

let products_div = document.getElementById("products");

products.forEach((product) => {
    products_div.innerHTML += `
        <div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Description: ${product.description}</p>
            <em>Price: ${product.price}</em>
            <p>Count: ${product.count}</p>
            <button class="add_to_basket" onclick="add(${product.id})">Add To Basket</button>
            <hr>
        </div>
    `;
});

let basket = [];
let basket_div = document.getElementById("basket");
let basket_products = document.getElementById("basket_products");
let basket_btn = document.getElementsByClassName("basket")[0];
let basket_close = document.getElementsByClassName("close")[0];

function add(id) {
    let product = products.find(val => val.id === id);

    if ( basket.find(val => product.id === val.id) ) return;

    basket.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        count: product.count,
    });

    basket_products.innerHTML += `
        <div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Description: ${product.description}</p>
            <em>Price: ${product.price}</em>
            <p>Count: ${product.count}</p>
            <button class="remove_product" onclick="remove_product(${product.id})">Remove</button>
            <hr>
        </div>
   `;
}

basket_btn.addEventListener("click", () => {
    basket_div.style.display = "block";
    products_div.style.display = "none";
});

basket_close.addEventListener("click", () => {
    basket_div.style.display = "none";
    products_div.style.display = "block";
});

function remove_product(id) {
    basket.find((product, index) => {
        if (product.id === id) {
            basket_products.children[index].remove();
        }
    });

    basket = basket.filter((product) => product.id !== id);
}
