//------------Scrolling-Menu--------------------

const scrollingMenu = document.querySelectorAll(".scrolling_menu");
const scrollingMenuTitle = document.querySelectorAll(".scrolling_menu_title");

// récuperer les éléments des sous-menu (getElement )
const sousMenu = document.querySelectorAll(".sous-menu");

for (let i = 0; i < scrollingMenu.length; i++) {
  scrollingMenu[i].addEventListener("click", function () {
    if (sousMenu[i].style.display === "inline") {
      sousMenu[i].style.display = "none";
    } else {
      sousMenu[i].style.display = "inline";
    }
  });
}

function updateTitle(balise, texte) {
  // console.log(balise);
  const target = document.getElementById(balise);
  // console.log(target);
  target.innerText = texte;
}

//------------Cards--------------------

let selectValue = "1";

const restaurant = restaurantList[0];
const restaurants = restaurantList;

const section = document.getElementById("cardSection");

const createCard = (restaurant) => {
  const card = ` <div class="card">
  <img src="${restaurant.imgSrc}" alt="${restaurant.imgAlt}" style="width: 100%" />
  <div class="container">
    <h4><b>${restaurant.name}</b></h4>
    <p>${restaurant.description}</p>
    <p> ${restaurant.foodPrice}</p>
    <div class="star-ratings-css" title="${restaurant.starRating}"></div>
  </div>
</div>`;
  const div = document.createElement("div");
  div.innerHTML = card;
  section.appendChild(div);
};

const render = () => {
  section.innerHTML = "";
  restaurants.forEach((restaurant) => {
    if (selectValue === restaurant.foodPrice || selectValue === "1") {
      createCard(restaurant);
    }
  });
};

render();

function filter() {
  selectValue = document.getElementsByClassName("food-price").value;
  render();
}
