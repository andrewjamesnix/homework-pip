describe('Accordian', () => {
    const component = new AccordianComponent();
    let fixture, main, content;



    it('should have main div visible', () => {
        expect(component.mainEl.style.display).toEqual('block')
    });

    it('should have content div invisible', () => {
        expect(component.contentEl.style.display).toEqual('none')
    });
});