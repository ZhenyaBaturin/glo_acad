'use strict';
const body = document.querySelector('body');
const str = '#dub';
const DomElement = function (selector, height, width, bg, fontSize) {
this.selector = selector;
this.height = height;
this.width = width;
this.bg = bg;
this.fontSize = fontSize;
this.getStyle = function() {
    const x =document.createElement('div');
for (let i = 0; i < this.selector .length; i++) {
    if (this.selector [i] === '.'){
        x.classList = this.selector.slice(i + 1, this.selector.length);
    } else if (this.selector [i] === '#'){
        x.id = this.selector;
    }
}
x.textContent = 'Какой то текст';
body.append(x);
x.style.height = `${this.height}px`;
x.style.width = `${this.width}px`;
x.style.backgroundColor = `${this.bg}`;
x.style.fontSize = `${this.fontSize}px`;
};
};




const redElement = new DomElement ('.div', 50, 150, 'red', 20);
const greenElement = new DomElement ('#div', 120, 199, 'green', 20);
redElement.getStyle();
greenElement.getStyle();