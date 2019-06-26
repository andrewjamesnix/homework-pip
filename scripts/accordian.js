    class AccordianComponent {
    constructor() {
        this.name = "Accordian";
        this.mainEl =  document.querySelectorAll(".main");
        this.contentEl =  document.querySelectorAll(".content");
    }

    addListeners = () => {
        this.mainEl.forEach((header, i) => {
            header.addEventListener('click', () => {
                this.removeActiveClass();
                this.contentEl[i].classList.toggle('active');
                console.info('[information] Opening ' + (i + 1) + this.suffix(i + 1) + ' container');
            });
        })
    };

    removeActiveClass = () => {
        this.contentEl.forEach((content, i) => {
            this.contentEl[i].classList.remove('active');
        });
    };

    suffix = (num) => {
        return num === 1 ? 'st' :
            num === 2 ? 'nd' :
                num === 3 ? 'rd' :
                    'th';
    };
}

let accordian = new AccordianComponent();

accordian.addListeners();



