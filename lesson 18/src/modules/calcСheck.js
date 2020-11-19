const calcСheck = () => {
    const calcBlokc = document.querySelector('.calc-block');
    const calcItem = calcBlokc.querySelectorAll('input');
    for(let i = 0; i < calcItem.length; i++){
        calcItem[i]/addEventListener('input', () => {
            if(i === 1){
                calcItem[i].setAttribute('maxlength', '1'); 
                calcItem[i].value = calcItem[i].value.replace(/\D/gi, '');
            } else {
                calcItem[i].setAttribute('maxlength', '3');
                calcItem[i].value = calcItem[i].value.replace(/\D/gi, '');
            }
        })
    }
};
export default calcСheck;