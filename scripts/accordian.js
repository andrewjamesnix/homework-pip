    class AccordianComponent {

    NUMBER_OF_ITEMS = 5;

    addListeners = () => {
        if (this.mainEl.length > 0) {
            this.mainEl.forEach((header, i) => {
                header.addEventListener('click', () => {
                    this.removeActiveClass();
                    this.contentEl[i].classList.toggle('active');
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
        let i = num % 10;
        let j = num % 100;

        return (i === 1 && j !== 11) ? 'st' :
            (i === 2 && j !== 12) ? 'nd' :
                (i === 3 && j!== 13 ) ? 'rd' :
                    'th';
    };
    createElement = (name, i) => {
        let newElement = document.createElement("div");
        if (name === 'heading') {
            newElement.setAttribute('class', 'main' + i + ' heading');
            newElement.innerText =  (i + 1) + this.suffix(i + 1) + ' Heading ';
        } else {
            newElement.setAttribute('class', 'content' + i + ' content');
            newElement.innerText =  (i + 1) + '. Lorem gypsum conut el sadat el plinky plonky ';
        }
        return newElement;
    };

    init = () => {
        let container = document.getElementById('container');
        if (document.getElementById('container') !== null) {
            container = document.getElementById('container');
            container.innerHTML = null;
        } else {
            let container = document.createElement('div');
            container.setAttribute('id', 'container');
        }

        document.body.append(container);
        accordian.createDom();
        accordian.addListeners();
    };

    createDom = () => {
        let headingDiv, contentDiv, listArray = [];

        for(let i = 0; i < this.NUMBER_OF_ITEMS; i++) {
            headingDiv = this.createElement('heading', i);
            contentDiv = this.createElement('content', i);
            listArray.push(headingDiv);
            listArray.push(contentDiv);
        }

        for(let i = 0; i < listArray.length; i++) {
            document.getElementById('container').append(listArray[i]);
        }
        this.container = document.getElementById('container');
        this.mainEl =  this.container.querySelectorAll(".heading");
        this.contentEl =  this.container.querySelectorAll(".content");
    }
}

const accordian = new AccordianComponent();






