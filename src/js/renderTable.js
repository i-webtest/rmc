import { getData } from './getData';
import { tabsControl } from './tabsControl';

const containerBottom = document.querySelector('.check__container-bottom');

export const renderTable = async () => {
  const data = await getData('https://i-webtest-json-server-687a.twc1.net/arch');

  const tBody = document.querySelector('.table__body');
  tBody.textContent = '';

  const items = data.map((item) => {
    const { id, title, price, rent, sq, bath, image } = item;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="table__body-title">${title}</td>
      <td>${bath}</td>
      <td>${sq}</td>
      <td>${price}</td>
      <td>${rent}</td>
      <td><button class="table__link" data-tab="${id}">VIEW NOW</button></td>
    `;

    containerBottom.insertAdjacentHTML(
      'beforeend',
      `
      <picture class="check__picture" id="${id}">
        <source srcset="${image[0]}" type="image/avif" />
        <source srcset="${image[1]}" type="image/webp" />
        <img class="check__image active" src="${image[2]}" width="410" height="500" alt="${title}" />
      </picture>
    `,
    );

    return tr;
  });

  tBody.append(...items);

  const tLink = document.querySelectorAll('.table__link');
  tLink.forEach((link) => {
    if (link.dataset.tab === 'penthouse') link.classList.add('active');
  });

  const image = document.querySelectorAll('.check__picture');
  image.forEach((img) => {
    if (img.id === 'penthouse') img.classList.add('active');
  });

  tabsControl();
};
