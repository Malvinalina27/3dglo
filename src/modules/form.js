const form = () => {
  document.addEventListener("input", event => {
    event.preventDefault();
    const name = document.querySelectorAll('[name="user_name"]');
    const email = document.querySelectorAll('[name="user_email"]');
    const phone = document.querySelectorAll('[name="user_phone"]');

    const target = event.target;
    const regularValid = () => {
      target.value = target.value.replace(/ +/g, ' ');
      target.value = target.value.replace(/-+/g, '-');
      target.value = target.value.replace(/^-|-$/g, '');
      target.value = target.value.trim();
    };

    if (target.matches("#form2-message")) {
      // eslint-disable-next-line no-useless-escape
      target.value = target.value.replace(/[^а-яё\-\ ,.!?][^0-9]/gi, '');
      target.addEventListener('blur', () => {
        regularValid();
      },
      true
      );
    }

    name.forEach(item => {
      if (target === item) {
        // eslint-disable-next-line no-useless-escape
        target.value = target.value.replace(/[^а-яё\ ]/gi, '');
        item.addEventListener('blur', () => {
          if (item.value.length < 2) {
            target.value = '';
            alert('Имя должно содержать не менее двух символов');
          }
          if (item.value.length > 1) {
            regularValid();
            target.value = target.value
              .split(' ')
              .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
              .join(' ');
            return true;
          }
        });
      }
    });

    email.forEach(item => {
      if (target === item) {
        if (target.value !== '') {
          const pattern = /^[a-z0-9][a-z0-9\._-]*[a-z0-9]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+/i;
          item.addEventListener('blur', () => {
            if (target.value.search(pattern) === 0) {
              alert('ВНИМАНИЕ! Введеный email адрес не соответствует общим стандартам.');
            }
          });
        }
        /* target.value = target.value.replace(/[^a-z@\-_.!~*']/gi, '');
        item.addEventListener('blur', () => {
          regularValid();
        },
        true
        ); */
        /* if (item.value.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
          item.style.border = '2px solid green';
        } else {
          item.style.border = '2px solid red';
        } */
      }
    });
    phone.forEach(item => {
      if (target === item) {
        maskPhone('.form-phone'),
        true;
      }
    });

  });

  // маска для телефона
  function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
      i = newValue.indexOf("_");
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
        a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      //
      if (!reg.test(this.value) || this.value.length < 18 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 18) {
        this.value = "";
      }

    }

    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }

  }

};

export default form;
