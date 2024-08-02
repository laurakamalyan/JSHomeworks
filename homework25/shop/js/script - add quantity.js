let products = [
    {
        id: 1,
        name: "Hair Shampoo",
        image: "./img/1.jpg",
        price: 120,
        count: 3,
    },
    {
        id: 2,
        name: "Hair Conditioner",
        image: "./img/2.webp",
        price: 423,
        count: 5,
    },
    {
        id: 3,
        name: "Soap",
        image: "./img/3.jpeg",
        price: 74,
        count: 8,
    },
    {
        id: 4,
        name: "Liquid Soap",
        image: "./img/4.jpeg",
        price: 96,
        count: 14,
    },
    {
        id: 5,
        name: "Hair Mask",
        image: "./img/5.webp",
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
            <em>Price: ${product.price}</em>
            <p class="count">Count: ${product.count}</p>
            <button class="add_to_basket" onclick="add(${product.id})">Add To Basket</button>
        </div>
    `;
});

let basket = [];
let basket_div = document.getElementById("basket");
let basket_products = document.getElementById("basket_products");
let basket_btn = document.getElementsByClassName("basket")[0];
let basket_close = document.getElementsByClassName("close")[0];

let quantity = 1;

function add(id) {
    let product = products.find(val => val.id === id);

    let basket_product = basket.find( (val, i) => {
        if (val.quantity === product.count) return val;
        if (product.id === val.id) {
            val.quantity++;
            basket_products.children[i].getElementsByClassName("quantity")[0].innerText =  `Quantity: ${val.quantity}`;
            basket_products.children[i].getElementsByClassName("count")[0].innerText =  `Count: ${product.count}`;
            return val;
        } 
    });
    
    if (basket_product) {
        return;
    } else {

        basket.push({
            id: product.id,
            name: product.name,
            price: product.price,
            count: product.count,
            quantity: quantity
        });
    
        basket_products.innerHTML += `
            <div>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <em>Price: ${product.price}</em>
                <p class="count">Count: ${product.count}</p>
                <p class="quantity">Quantity: ${quantity}</p>
                <button class="remove_product" onclick="remove_product(${product.id})">Remove</button>
                <button class="remove_product" onclick="buy_product(${product.id})">Buy</button>
                <hr>
            </div>
       `;
    }
}

basket_btn.addEventListener("click", () => {
    basket_div.style.display = "block";
    products_div.style.display = "none";
    basket_btn.style.display = "none";
    document.body.style.backgroundColor = "rgba(255, 182, 208, 0.3)";
});

basket_close.addEventListener("click", () => {
    basket_div.style.display = "none";
    products_div.style.display = "flex";
    basket_btn.style.display = "block";
    document.body.style.backgroundColor = "white";
});

function remove_product(id) {
    basket.find((product, index) => {
        if (product.id === id) {
            basket_products.children[index].remove();
        }
    });

    basket = basket.filter((product) => product.id !== id); 
}

function buy_product(id) {
    let quantity = basket.find(val => val.id === id).quantity;
    
    products.find((val, i) => {
        if (val.id === id) {
            val.count -= quantity;

            if (val.count === 0) {
                products_div.children[i].remove();
                products = products.filter((product) => product.id !== id);
                    return val;
            } else {
                products_div.children[i].getElementsByClassName("count")[0].innerText = `Count: ${val.count}`;
                return val;
            }
        }
        
    });

    remove_product(id);
}