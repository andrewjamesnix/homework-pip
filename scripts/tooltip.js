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

const paragraphs = ['Lorem ipsum dolor sit amet, consectetur adipiscing ' +
    'elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo ' +
    '<span class="tooltip" dataToolContent="A bit like consequence">consequat</span>. ' +
    'Duis aute irure dolor in reprehenderit in ' +
    'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ' +
    'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ' +
    'anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' +
    '<span class="tooltip" dataToolContent="A bit like accused">accusantium</span>.' +
    'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ' +
    'veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ' +
    'ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ' +
    'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque' +
    'porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ' +
    'velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ' +
    'aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ' +
    'ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ' +
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil ' +
    'molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor erat ' +
    'velit, sit amet malesuada nulla faucibus et. In eget erat quis urna finibus ' +
    '<span class="tooltip" dataToolContent="A bit like pretty">pretium</span>.' +
    'sit amet id orci. Integer fermentum ligula at tincidunt viverra. Nam sollicitudin ' +
    'odio sit amet nunc varius, et dignissim sem tempor. Morbi auctor mattis diam.',
    'Aliquam imperdiet elementum ' +
    '<span class="tooltip" dataToolContent="A Roman emperor with osteoparosis">ligula</span>.' +
    '. Sed dapibus tincidunt augue at pharetra. Proin ' +
    'sed nisl eget sem sollicitudin vehicula a dapibus enim. Donec vitae ligula enim. ' +
    'Aliquam porta tortor felis, interdum faucibus.'

];
