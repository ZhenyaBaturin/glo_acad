const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        calcCount = document.querySelector('.calc-count'),
        totalValue = document.getElementById('total');
    let n = 0;
    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1; 
        const typeValue = calcType.options[calcType.selectedIndex].value,
             squareValue = +calcSquare.value;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }
         if(calcDay.value < 5 && calcDay.value > 0){
            dayValue *= 2;
         } else if (calcDay.value < 10 && calcDay.value > 0){
            dayValue *= 1.5;
         } else  if(calcDay.value > 11){
            dayValue *= 1;
         }
        if(typeValue && squareValue) {
            total = Math.round(price * typeValue * squareValue * countValue * dayValue);
            let interval = setInterval(() => { 
                n += 100;
                if(total <= n) {
                    clearInterval(interval);
                }
                totalValue.textContent = n;
            }, 0.1);
        } 
    };
    
        calcBlock.addEventListener('change', (e) => {
            const target = e.target;
            if(target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                totalValue.textContent = 0;
                
                countSum();
            }
        });

};
export default calc;