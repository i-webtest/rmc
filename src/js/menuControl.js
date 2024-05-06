const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.header__wrapper');
const html = document.querySelector('html');

export const menuControl = () => {
  const toggleMenu = () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    html.classList.toggle('lock');
  };

  const handlerMenu = ({ target }) => {
    if (menu.classList.contains('active')) {
      if (!target.closest('.header__wrapper')) {
        toggleMenu();
      } else if (target.closest('.header__wrapper') && target.closest('.navigation__link')) {
        toggleMenu();
      }
    } else if (target.closest('.hamburger')) {
      toggleMenu();
    }
  };

  document.querySelectorAll('.navigation__link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const href = e.target.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      let topOffset = 0;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  document.addEventListener('click', handlerMenu);
};
