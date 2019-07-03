describe('ChaserGameComponent', () => {
    const component = new ChaserGameComponent();
    describe('init method', () => {
        it('should create the DOM', () => {
            component.init();
            expect(document.querySelectorAll('#container').length).toBe(1);
            expect(document.querySelectorAll('.gameArea').length).toBe(1);
            expect(document.querySelectorAll('.score').length).toBe(1);
        });
    });
    describe('build method', () => {
        it('should create the DOM', () => {
            component.build();
            expect(document.querySelectorAll('.box').length).toBe(1);
            expect(document.querySelectorAll('.square').length).toBe(16);
            expect(document.querySelectorAll('.active').length).toBe(1);

        });
    });
});
