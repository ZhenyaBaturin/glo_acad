const sendForm = () => {
    const errorMessege = 'Что то пошло не так',
        loadMessege  = 'Загрузка...',
        successMessege = "Спасибо! Мы с вами скоро свзжимся";

    const form = document.getElementById('form1'),
        formInput = form.querySelectorAll('input'),
        form2 = document.getElementById('form2'),
        formInput2 = form2.querySelectorAll('input'),
        form3 = document.getElementById('form3'),
        formInput3 = form3.querySelectorAll('input'),       
        formPhone = document.querySelectorAll('.form-phone'),
        formName = document.querySelectorAll('.form-name'),
        formEmail = document.querySelectorAll('.form-email'),
        topForm = form2.querySelector('.top-form'),
        form2Mess = form2.querySelector('.mess');

     
    formEmail.forEach(item => {
        item.setAttribute('required', true)
    })

    formPhone.forEach(item => {
        item.addEventListener('input', () => {
            
            item.setAttribute('maxlength', '11');
            item.setAttribute('minlength', '7')
            item.value = item.value.replace(/[^0-9+]/gi, '');            
        })
    });
    formName.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s]/gi, '');
            
        })
    })
    formEmail.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/ /g, '');
        })
    })
        
    topForm.addEventListener('input', () => {
        topForm.value = topForm.value.replace(/[^а-я\s]/gi, '');
    });
    form2Mess.addEventListener('input', () => {
        form2Mess.value = form2Mess.value.replace(/[^а-я\s]/gi, '');
    });

    const statusMessage = document.createElement('div');
    
    statusMessage.style.cssText = 'font-size: 2rem;'
    statusMessage.style.color = '#fff';
    let timeOut = () => {
        setTimeout(() => {
            statusMessage.remove();
        }, 3000);
    }
    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form);
        let body = {};
        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('error')
                }
                statusMessage.textContent = successMessege;
                timeOut();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessege;
                timeOut();
                console.log(error);
            })
        formInput.forEach(item => {
            item.value ='';
        })
    })
    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        form2.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form2);
        let body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('error')
                }
                statusMessage.textContent = successMessege;
                timeOut();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessege;
                timeOut();
                console.log(error);
            })
        formInput2.forEach(item => {
            item.value = '';
        })
    })
    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        form3.appendChild(statusMessage);
        statusMessage.textContent = loadMessege;
        const formData = new FormData(form3);
        let body = {};

        for(let val of formData.entries()){
            body[val[0]] = val[1]
        }
        postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('error')
                }
                statusMessage.textContent = successMessege;
                timeOut();
            })
            .catch((error) => {
                statusMessage.textContent = errorMessege;
                timeOut();
                console.log(error);
            })
          
        formInput3.forEach(item => {
            item.value = '';
        })
    })
    
        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        }
};
export default sendForm;