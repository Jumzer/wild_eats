//------------Scrolling-Menu--------------------

const scrollingMenu = document.querySelectorAll('.scrolling_menu');
const scrollingMenuTitle = document.querySelectorAll('.scrolling_menu_title');

// récuperer les éléments des sous-menu (getElement )
const sousMenu = document.querySelectorAll('.sous-menu');

for (let i = 0; i < scrollingMenu.length; i++) {
    scrollingMenu[i].addEventListener('click', function () {
        if (sousMenu[i].style.display === 'inline') {
            sousMenu[i].style.display = 'none'
        } else {
            sousMenu[i].style.display = 'inline'
        }
    })
}

function updateTitle(balise, texte) {
    // console.log(balise);
    const target = document.getElementById(balise);
    // console.log(target);
    target.innerText = texte
}


// BUDGET = SCROLLING_MENU a
// VEGGIE = SOUS-MENU a