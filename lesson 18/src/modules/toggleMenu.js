const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('close-btn')){
            handlerMenu();
        } else if (target.matches('menu')){
            target = target.closest('ul>li');
            if( target === null){
                return;
            }else if(target.matches('li')){
                handlerMenu();
            } 
        } else {
            target = target.closest('.menu');
            if (target === null) {
                menu.classList.remove('active-menu');
                return;
            }
            else if(target.matches('.menu')){
                handlerMenu(); 
            } 
        }
    });

};
export default toggleMenu;