    class AccordianComponent {
    constructor() {
        this.name = "Accordian";
        //this.container = document.getElementById('#dynamic');

    }

    addListeners = () => {
        if (this.mainEl.length > 0) {
            this.mainEl.forEach((header, i) => {
                header.addEventListener('click', (e) => {
                    console.log(e);
                    this.removeActiveClass();
                    this.contentEl[i].classList.toggle('active');
                    console.info('[information] Opening ' + (i + 1) + this.suffix(i + 1) + ' container');
                });
            });
        }
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

    createDom = () => {
        let headingDiv, contentDiv, listArray = [];

        for(let i = 0; i < 4; i++) {
            headingDiv = document.createElement("div");
            headingDiv.setAttribute('class', 'main' + i + ' heading');
            headingDiv.innerText =  'Heading ' + (i + 1);
            contentDiv = document.createElement("div");
            contentDiv.setAttribute('class', 'content' + i + ' content');
            contentDiv.innerText =  'Lorem gypsum conut el sadat el plinky plonky ' + (i + 1);
            listArray.push(headingDiv);
            listArray.push(contentDiv);
        }
        for(let i = 0; i < listArray.length; i++) {
            document.getElementById('dynamic').append(listArray[i]);
        }
        this.container = document.getElementById('dynamic');
        this.mainEl =  this.container.querySelectorAll(".heading");
        this.contentEl =  this.container.querySelectorAll(".content");
    }
}

let accordian = new AccordianComponent();

accordian.createDom();
accordian.addListeners();



