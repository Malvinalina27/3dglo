const toggleMenu = () => {
  const menu = document.querySelector('menu'); // само меню

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.body.addEventListener('click', e => {
    const target = e.target;
    // закрытие меню по нажатию вне его
    if (!target.closest('menu') && menu.classList.contains('active-menu')) {
      handlerMenu();
    }
    // закрытие/открытие меню по бургер-меню
    if (target.closest('.menu')) {
      handlerMenu();
    }
    //закрытие по крестику
    if (target.classList.contains('close-btn')) {
      handlerMenu();
    }
    //закрытие меню по нажатию на li
    if (target.closest('li>a')) {
      handlerMenu();
    }
  });

};

export default toggleMenu;
