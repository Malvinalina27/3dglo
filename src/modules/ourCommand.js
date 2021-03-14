const ourCommand = () => {
  const command = document.querySelector('.command');
  let support;
  command.addEventListener('mouseover', event => {
    const target = event.target;
    if (target.matches('img')) {
      support = target.src;
      target.src = target.dataset.img;
      target.dataset.img = support;
    }
  });
  command.addEventListener('mouseout', event => {
    const target = event.target;
    if (target.matches('img')) {
      support = target.src;
      target.src = target.dataset.img;
      target.dataset.img = support;
    }
  });
};

export default ourCommand;
