const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelectorAll(['#form1', '#form2', '#form3']);


  const statusMessage = document.createElement('div');
  statusMessage.classList.add('visible');
  statusMessage.style.cssText = 'font-size: 2 rem; color: #fff;';

  // ajax
  const postData = body =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });

  //заполнение формы
  form.forEach(elem => {
    elem.addEventListener('submit', event => {
      event.preventDefault();
      elem.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const input = elem.querySelectorAll('input');

      const formData = new FormData(elem);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
          setTimeout(() => {
            input.forEach(item => {
              item.value = '';
            });
            document.querySelector('.popup').style = 'display:none;';
            elem.removeChild(statusMessage);
          }, 3000);

        })
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.error(error);
          setTimeout(() => {
            input.forEach(item => {
              item.value = '';
            });
            elem.removeChild(statusMessage);
          }, 3000);
        });
    });
  });
};

export default sendForm;
