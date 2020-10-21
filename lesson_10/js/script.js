'use strict';

const blockBook = document.querySelectorAll('.book'),
    books = document.querySelector('.books'),
    body = document.querySelector('body'),
    adv = document.querySelector('.adv'),
    titleBooks = document.querySelectorAll('a'),
    textBook2 = blockBook[0].querySelectorAll('li'),
    textBook5 = blockBook[5].querySelectorAll('li');


// 1
blockBook[3].before(blockBook[4]);
books.append(blockBook[2]);
books.prepend(blockBook[1]);

// 2
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3
titleBooks[4].textContent = 'Книга 3. this и Прототипы Объектов';

// 4
adv.remove();

// 5
textBook2[1].after(textBook2[3]);
textBook2[3].after(textBook2[6]);
textBook2[4].before(textBook2[8]);
textBook2[9].after(textBook2[2]);
textBook5[1].after(textBook5[9]);
textBook5[6].before(textBook5[2]);
textBook5[7].after(textBook5[5]);

// 6
const newLi = document.createElement('li'),
    textBook6  = blockBook[2].querySelectorAll('li');
    newLi.textContent = 'Глава 8: За пределами ES6';
    textBook6[8].after(newLi);





