const toggleFaсe = () => {
    const command = document.querySelector('#command');
    const img = command.querySelectorAll('img');
    img.forEach((elem) => {
        let scr = elem.getAttribute('src');
        elem.addEventListener('mousemove', (e) => {
            e.target.src = e.target.dataset.img;
        });
        elem.addEventListener('mouseout', (e) => {
            e.target.src = scr;
        });
    });
};
export default toggleFaсe;