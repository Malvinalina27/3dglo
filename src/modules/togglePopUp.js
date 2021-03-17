const togglePopUp = () => {
  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popupContent = document.querySelector('.popup-content');
  //const width = document.documentElement.clientWidth; //ширина экрана

  //animation popupContent
  function animate({ duration, timing, draw }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
  //click on popupBtn
  popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      const width = document.documentElement.clientWidth;
      popup.style.display = 'block';
      if (width < 768) {
        popup.style.display = 'block';
      } else if (width > 768 && width <= 1280) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.left = '0%';
            popup.style.opacity = 0.1;
            popupContent.style.left = progress * 34 + '%';
            popup.style.opacity = progress * 1;
          },
        });
      } else if (width > 1280) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.left = '0%';
            popup.style.opacity = 0.1;
            popupContent.style.left = progress * (width / 2.5) + 'px';
            popup.style.opacity = progress * 1;
          },
        });
      }
    });
  });

  //popup
  popup.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });

};

export default togglePopUp;
