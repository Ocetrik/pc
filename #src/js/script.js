const burgerMenu = document.querySelector('.header__burger');
if (burgerMenu) {
   const itemMenu = document.querySelector('.header__menu');
   burgerMenu.addEventListener("click", function () {
      // burgerMenu.classList.toggle('_active');
      itemMenu.classList.toggle('_active');
   });
}