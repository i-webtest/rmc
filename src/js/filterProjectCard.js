export const filterProjectCard = () => {
  const links = document.querySelectorAll('.projects__link');
  const cards = document.querySelectorAll('.projects__content-item');

  const filteredCategory = (category, items) => {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';

      if (isItemFiltered && !isShowAll) {
        item.classList.add('hide');
      } else {
        item.classList.remove('hide');
      }
    });
  };

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const linkId = link.getAttribute('data-filter');
      console.log('linkId: ', linkId);

      if (!link.classList.contains('active')) {
        links.forEach((item) => {
          item.classList.remove('active');
        });

        link.classList.add('active');
      }

      filteredCategory(linkId, cards);
    });
  });
};
