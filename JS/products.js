const products = [
  { picture: "images/TTLogo.webp", name: "Крутые кеды", price: 10000},
  { picture: "images/TTLogo.webp", name: "Крутые кроссовки", price: 5000},
  { picture: "images/TTLogo.webp", name: "Крутые Какашки", price: 5000},
  { picture: "images/TTLogo.webp", name: "Крутые Фу говно", price: 5000},
  { picture: "images/TTLogo.webp", name: "Крутые кака", price: 5000},
  { picture: "images/TTLogo.webp", name: "Крутые какакакака", price: 5000},
  { picture: "images/TTLogo.webp", name: "Крутые кроссовки", price: 5000},
];

const template  = document.getElementById("product-template");
const container = document.getElementById("product");

products.forEach(item => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".picture").src = item.picture;
  clone.querySelector(".name").textContent = item.name;
  clone.querySelector(".price").textContent = item.price;

  container.appendChild(clone);
});