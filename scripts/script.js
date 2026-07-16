'use strict';

console.log("JS подключен");
const products = [
    {
    name: "Apple IPhone 14 Pro Max 128GB Deep Purple",
    price: "$900",
    image: "assets/images/iphone14pro.png",
    category: "Bestseller",
    favorite: false
},
{
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: "$2535",
    image: "assets/images/product2.png",
    category: "Featured Products",
        favorite: false

},

{
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: "$399",
    image: "assets/images/applewatch.png",
    category: "Featured Products",
        favorite: false

},
 {
    name: "AirPods Max Silver <br> Starlight Aluminium",
    price: "$549",
    image: "assets/images/airpods.png",
    category: "Bestseller",
        favorite: false

},
{
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "$369",
    image: "assets/images/gwatch.png",
    category: "Bestseller",
        favorite: false

},
{
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "$1799",
    image: "assets/images/zfold.png",
    category: "Featured Products",
        favorite: true
},
{
    name: "Galaxy Buds FE <br> Graphite",
    price: "$99.99",
    image: "assets/images/buds.png",
    category: "Bestseller",
        favorite: false

},
{
    name: "Apple iPad 9 10.2\"\ 64GB Wi-Fi Silver (MK2L3) 2021",
    price: "$398",
    image: "assets/images/ipad.png",
    category: "Bestseller",
        favorite: false

}
]
const productsGrid = document.querySelector(".products-grid");
const categoryButtons = document.querySelectorAll("[data-category]");
categoryButtons.forEach(button=>{
    button.addEventListener("click", () => {
       const selectedCategory = button.dataset.category;
       if (selectedCategory === "All") {
        renderProducts(products);
       }
       console.log(selectedCategory);
    });
});
function renderProducts (productsArray) {
    productsGrid.innerHTML = "";
productsArray.forEach(product => {
    productsGrid.innerHTML += `
    <div class="products-card">
<div class="card-header">
        <img class="favorite-icon"
        src="${
            product.favorite
            ? "assets/icons/Likeactive.svg"
            : "assets/icons/Favorite_duotone.svg"
        }"
        alt="favorite-icon">
        </div>

        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="buy-now">
            Buy Now
            </button>

            </div>
    `;
});
}
renderProducts(products);
