const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = document.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++){
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
            
        } 
    };
        tabHeader.addEventListener('click', (e) => {
            let target = e.target;
                target =target.closest('.service-header-tab');/*проверяет у родителя о наличие необходимого атрибута*/ 
            if(target.classList.contains('service-header-tab')){
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
};
export default tabs;