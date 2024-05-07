import { filterProjectCard } from './filterProjectCard';
import { getData } from './getData';

export const renderProjectCard = async () => {
  const data = await getData('https://rmc-json-server.onrender.com/project');
  const contentList = document.querySelector('.projects__content-list');
  contentList.textContent = '';

  const items = data.map((item) => {
    const { id, image } = item;

    const li = document.createElement('li');
    li.classList.add('projects__content-item', `${id}`);

    const picture = document.createElement('picture');
    picture.classList.add('projects__content-picture');
    picture.innerHTML = `
      <source srcset="${image[0]}" type="image/avif" />
      <source srcset="${image[1]}" type="image/webp" />
      <img
        class="projects__content-img"
        src="${image[2]}"
        width="307"
        height="500"
        alt="${id}"
      />
    `;

    li.append(picture);

    return li;
  });

  contentList.append(...items);
  filterProjectCard();
};
