const scrollingMenu = document.querySelectorAll('.scrolling_menu');

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