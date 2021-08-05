const allbtn = document.querySelector("#all-btn");
const koreabtn = document.querySelector("#korea-btn");
const japanbtn = document.querySelector("#japan-btn");
const chinabtn = document.querySelector("#china-btn");

function allEvents() {
  allbtn.addEventListener("click", foodsFilterAll);
  koreabtn.addEventListener("click", foodsFilter);
  japanbtn.addEventListener("click", foodsFilter);
  chinabtn.addEventListener("click", foodsFilter);
}
allEvents();

let foods = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    explanation: "Spicy rice cakes, serving with fish cake.",
    img: "images/Ktteokbokki-500x500.jpg",
  },
  {
    id: 2,
    title: "Bibimbap",
    category: "Korea",
    explanation: "Boiling vegetables, serving with special hot sauce",
    price: 8.99,
    img: "images/Kbibimbap.jpg",
  },
  {
    id: 3,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    explanation: "Black bean sauce noodle, serving with green onion",
    img: "images/KJajangmyeon.jpg",
  },
  {
    id: 4,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    explanation:
      "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
    img: "images/Jchicken-ramen.jpg",
  },
  {
    id: 5,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    explanation: "Rice Sandwich, serving with soy sauce",
    img: "images/Jchicken-ramen.jpg",
  },
  {
    id: 6,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    explanation: "Red bean paste dessert, serving with honey.",
    img: "images/JDorayaki.jpg",
  },
  {
    id: 7,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    explanation: "Dan dan noodle, serving with green onion",
    img: "images/CDan-Dan-Mian.jpg",
  },
  {
    id: 8,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    explanation: "Yangzhou style fried rice, serving with bean and pickles",
    img: "images/CYangzhou-Fried-Rice.jpg",
  },
  {
    id: 9,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    explanation: "Hot pepper sauce noodle, serving with soy bean and onion",
    img: "images/CMa-Yi-Shang-Shu.jpg",
  },
];
let foodArray = [];
const divDOM = document.querySelector(".nav-container");
function foodsFilterAll() {
  divRemove();
  foodArray = [];
  foods.map((e) => {
    foodArray.push(e);
  });
  foodArray.map((e) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("food");
    newDiv.innerHTML = `<div class="food-img">
    <img src="${e.img}" alt="" />
  </div>
  <div class="food-info">
    <div class="food-title-desc">
      <span>${e.title}</span>
      <span>${e.price} </span>
    </div>
    <div class="food-explanation">
      <p>${e.explanation}</p>
    </div>
  </div>`;
    divDOM.append(newDiv);
  });
}
foodsFilterAll();
function foodsFilter(x) {
  divRemove();
  foodArray = [];
  let divDOM = document.querySelector(".nav-container");
  let getID = x.target.id;
  let getValue = document.querySelector(`#${getID}`).innerHTML;
  foods.map((e) => {
    if (e.category == getValue) {
      foodArray.push(e);
    }
  });
  foodArray.map((e) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("food");
    newDiv.innerHTML = `<div class="food-img">
    <img src="${e.img}" alt="" />
  </div>
  <div class="food-info">
    <div class="food-title-desc">
      <span>${e.title}</span>
      <span>${e.price} </span>
    </div>
    <div class="food-explanation">
      <p>${e.explanation}</p>
    </div>
  </div>`;
    divDOM.append(newDiv);
  });
}
function divRemove() {
  foodArray.forEach((e) => {
    document.querySelector(`.food`).remove();
  });
}
