const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
    let count = -30;
    popupBtn.forEach((item) => {
        item.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 768) {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'block';
                popupContent.style.top = '-30%';
                let getAnimPopup = () => {
                    count++;
                    if(count < 11) {
                        popupContent.style.top = `${count}%`;
                    } else {
                        clearInterval(idInterval);
                        count = -30;
                    }
                };
                let idInterval = setInterval(getAnimPopup, 10);
                }

        });
    });
    
    popup.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
        if(!target){
            popup.style.display = 'none';
        }
        }
            
    });

};
export default togglePopUp;