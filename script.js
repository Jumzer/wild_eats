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
let searchValue = '';

//------------Cards--------------------
let priceValue = "All";
let regimValue = "All";
let styleValue = "All";

// const restaurant = restaurantList[0];
const restaurants = restaurantList;

const section = document.getElementById("cardSection");

const createCard = (restaurant) => {
  const card = ` <div class="card">
  <img src="${restaurant.imgSrc}" alt="${restaurant.imgAlt}" style="width: 100%" />
  <div class="container">
    <h4><b>${restaurant.name}</b></h4>
    <p>${restaurant.description}</p>
    <p> ${restaurant.foodPrice}</p>
    <p> ${restaurant.regim}</p>
    <p> ${restaurant.style}</p>
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


    if ((restaurant.foodPrice === priceValue || priceValue === "All") && (restaurant.regim === regimValue || regimValue === "All") && (restaurant.style === styleValue || styleValue === "All") &&
      // (ce qu'écrit l'utilisateur dans la barre de recherche est compris dans les lettres du nom du restaurant)) 
      (restaurant.name.includes(searchValue))) {


      createCard(restaurant)

    }
  });
}

render();

// Filtres pour les prix

function filterPriceDefault() {
  priceValue = "All";
  updateTitle('budget', 'Budget');
  render()
}

function filterPrice10() {
  priceValue = "moins de 10 €";
  updateTitle('budget', ' - de 10 €')
  render();
}

function filterPrice1020() {
  priceValue = "de 10 à 20 €";
  updateTitle('budget', '10 - 20 €')
  render();
}

function filterPrice20() {
  priceValue = "Plus de 20 €";
  updateTitle('budget', '20 € et +')
  render();
}


// Filtres pour les régimes

function filterRegimDefault() {
  regimValue = "All";
  updateTitle('regime', 'Régime');
  render()
}

function filterVegan() {
  regimValue = "Vegan";
  updateTitle('regime', 'Vegan');
  render();
}

function filterCarne() {
  regimValue = "Carné";
  updateTitle('regime', 'Carné');
  render();
}

function filterGluten() {
  regimValue = "Gluten-free";
  updateTitle('regime', 'Gluten-free');
  render();
}


// Filtres pour les styles

function filterStyleDefault() {
  styleValue = "All";
  updateTitle('style', 'Style');
  render()
}

function filteritalian() {
  styleValue = "Italien";
  updateTitle('style', 'Italien');
  render();
}

function filterJapan() {
  styleValue = "Japonais";
  updateTitle('style', 'Japonais');
  render();
}

function filterJunk() {
  styleValue = "Junk-food";
  updateTitle('style', 'Junk-food');
  render();
}

const launchSearchValue = (event) => {
  section.innerHTML = ""
  searchValue = event.target.value;
  console.log(searchValue)
  render();
}

//------------SearchBar--------------------
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', launchSearchValue);

const searchInput2 = document.getElementById('searchInput2');
searchInput2.addEventListener('input', launchSearchValue);

