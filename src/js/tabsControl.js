export const tabsControl = () => {
  const btns = document.querySelectorAll('.table__link');
  const btnContent = document.querySelectorAll('.check__picture');

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnId = btn.getAttribute('data-tab');
      const currenImg = document.querySelector(`#${btnId}`);

      if (!btn.classList.contains('active')) {
        btns.forEach((item) => {
          item.classList.remove('active');
        });

        btnContent.forEach((item) => {
          item.classList.remove('active');
        });

        btn.classList.add('active');
        currenImg.classList.add('active');
      }
    });
  });
};
