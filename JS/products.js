const products = [
  { picture: "images/IPhone18ProMax.jpeg", name: "IPhone 18 Pro Max", price: "1399$"},
  { picture: "images/IPhone18Pro.webp", name: "IPhone 18 Pro", price: "1199$"},
  { picture: "images/IPhoneAir.jpg", name: "IPhone Air", price: "999$"},
  { picture: "images/IPhoneDuo.jpg", name: "IPhone Duo", price: "2999$"},
  { picture: "images/S25Ultra.webp", name: "Samsung Galaxy S25 Ultra", price: "999$"},
  { picture: "images/S25FE.jpg", name: "Samsung Galaxy S25 FE", price: "899$"},
  { picture: "images/Fold8.jpg", name: "Samsung Fold 8 Ultra", price: "1299$"},
  { picture: "images/PS5.jpg", name: "Playstation 5 Pro", price: "1099$"},
  { picture: "images/NS2.jpg", name: "Nintendo Switch 2", price: "499$"},
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