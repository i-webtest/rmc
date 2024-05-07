import { getData } from './getData';

export const renderImage = async () => {
  const data = await getData('https://rmc-json-server.onrender.com/images');

  const imagesList = document.querySelector('.images__list');
  imagesList.textContent = '';

  const items = data.map((item) => {
    const li = document.createElement('li');
    li.classList.add('images__item');

    const picture = document.createElement('picture');
    picture.innerHTML = `
      <source srcset="${item.image[0]}" type="image/avif" />
      <source srcset="${item.image[1]}" type="image/webp" />
      <img class="" src="${item.image[2]}" width="258" height="350" alt="image" />
    `;

    li.append(picture);

    return li;
  });

  imagesList.append(...items);
};
