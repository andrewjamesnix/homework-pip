describe('ChaserGameComponent', () => {
    const component = new ChaserGameComponent();
    describe('handleKey method', () => {
        it('should return correct number suffix for 1', () => {
            let goLeft = component.handleKey('left');
            expect(goLeft).toBe("stylesheet");
        });


    });



});
