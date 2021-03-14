const calc = (price = 100) => {
  const calcItem = document.querySelectorAll(['.calc-square', '.calc-count', '.calc-day']);

  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const totalValue = document.getElementById('total');


  calcItem.forEach(elem => {
    elem.addEventListener('input', () => {
      if (elem === calcSquare) {
        elem.value = elem.value.replace(/[^0-9.]/g, '');
      } else {
        elem.value = elem.value.replace(/[^0-9]/g, '');
      }
    });
  });

  calcBlock.addEventListener('change', event => {
    const target = event.target;

    // сброс значений
    if (calcType.options[calcType.selectedIndex].matches('.calc-option-title')) {
      calcDay.value = '';
      calcCount.value = '';
      calcSquare.value = '';
    }

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);
      }

      totalValue.textContent = total;
    };
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });

};

export default calc;
