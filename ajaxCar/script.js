document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        cars()
        .then((elem) => {

                const data = JSON.parse(elem);
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    const {brand, model, price} = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                    Цена: ${price}$`;
                } 
                console.log(select.value);
                if(select.value === 'no') {
                    output.innerHTML = 'Выберите тачку';
                }
            })
            
            
        })
        .catch(() => {
            console.log('Произошла ошибка');
            output.innerHTML = 'Произошла ошибка';
        })
    })
    
    const cars = () => {
        const request = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if(request.readyState !== 4){
                    return;
                }
                if (request.status === 200) {

                    console.log(request);
                    resolve(request.responseText);
                } else {
                    reject()
                }
               
            });
        })
    }
});