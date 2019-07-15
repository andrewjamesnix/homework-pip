describe('ChaserGameComponent', () => {
    const component = new ChaserGameComponent();
    let containerStub, gameAreaStub, scoreStub, parent;
    describe('createGameAreaDom method', () => {
        beforeEach(() => {
            parent = {
                querySelectorAll: sinon.stub(),
                appendChild: sinon.stub()
            };
            containerStub = {
                id: 'container',
                children: [],
                setAttribute: sinon.stub(),
                appendChild: sinon.stub(),
                querySelectorAll: sinon.stub()
            };
            gameAreaStub = {
                class: 'gameArea',
                setAttribute: sinon.stub()
            };
            scoreStub = {
                class: 'score',
                setAttribute: sinon.stub()
            };
        });
        it('adds correct class', () => {
            containerStub.querySelectorAll.returns([gameAreaStub]);
            var expectedClass = 'gameArea';

            component.createGameAreaDom();
            expect(gameAreaStub.class).toBe(expectedClass);
        });
    });
    // describe('build method', () => {
    //     it('should create the DOM', () => {
    //
    //         expect(document.querySelectorAll('.box').length).toBe(1);
    //         expect(document.querySelectorAll('.square').length).toBe(16);
    //         expect(document.querySelectorAll('.active').length).toBe(1);
    //
    //     });
    // });
});
