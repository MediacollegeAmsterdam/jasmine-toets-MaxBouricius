let productList = {
    name: "Max",
    age: 17,
    hobby: "games"
};

let productList_storage = JSON.stringify(productList);

localStorage.setItem("productList", productList_storage);
console.log(localStorage);

JSON.parse("")
