class TooltipComponent {
    tooltips = document.querySelectorAll('.tooltip');
    output = document.querySelector('.output');
    myInterval = setInterval( () => {
        this.output.style.display = 'none'
    }, 3000);
    init = () => {
        this.tooltips.forEach(tooltip => {
            tooltip.addEventListener('mouseover', (e) => {
                let holder = e.srcElement.getAttribute('datatoolcontent');
                clearInterval(this.myInterval);
                this.output.style.display = 'block';
                this.output.style.top = e.clientY + 5 + "px";
                this.output.style.left = e.clientX + 5 + "px";
                this.output.innerHTML = holder;
            });
            tooltip.addEventListener('mouseout', () => {
                this.output.style.display = 'none';
            });
        });
    }
}
const tooltip = new TooltipComponent();
tooltip.init();

