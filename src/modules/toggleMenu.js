const toggleMenu = () => {
  const menu = document.querySelector('menu'); // само меню

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.body.addEventListener('click', e => {
    const target = e.target;
    console.log(target);
    if (target.classList.contains('close-btn') || target.closest('li>a') || target.closest('.menu')) {
      handlerMenu();
    } /* else if (target.tagName !== 'MENU') {
      menu.classList.remove('active-menu');
    } */
  });

};

export default toggleMenu;
