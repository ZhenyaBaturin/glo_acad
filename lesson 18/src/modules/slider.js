const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        slider = document.querySelector('.portfolio-content');
    let currentSlide = 0,
        interval = 0;
        // созданные точки
    const pushDot = () => {
        const portfolioDots = document.querySelector('.portfolio-dots');
        for( let i = 0; i < slide.length; i++) {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            if(i === currentSlide){
                dot.classList.add('dot-active');
            }
            portfolioDots.append(dot); 
        }   
    };
    pushDot();

    const dot = document.querySelectorAll('.dot');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    }; 
    slider.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((item, i) => {
                if(item === target) {
                    currentSlide = i;
                }
            });
        }
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', (e) => {
        if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (e) => {
        if(e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
            startSlide();
        }
    });
    startSlide(1500);
};
export default slider;