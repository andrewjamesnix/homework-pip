const tooltips = document.querySelectorAll('.tooltip');
const output = document.querySelector('.output');
let myInterval;
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseover', (e) => {
        let holder = e.srcElement.getAttribute('datatoolcontent');
        clearInterval(myInterval);
        console.log(e.clientX + ' x ' + e.clientY)
        output.style.display = 'block';
        output.style.top = e.clientY + 5 + "px";
        output.style.left = e.clientX + 5 + "px";
        output.innerHTML = holder;
        myInterval = setInterval( () => {
            output.style.display = 'none'
        }, 3000);
    });
    tooltip.addEventListener('mouseout', () => {
        output.style.display = 'none';
    });
});