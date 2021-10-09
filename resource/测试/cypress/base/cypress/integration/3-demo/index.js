describe('百度测试用例1', () => {
    beforeEach(() => {
        cy.visit('https://www.baidu.com')
    })

    it('百度输入', () => {
        cy.get('#kw').type('辛睿恩').should('have.value', '辛睿恩').clear().should('have.value', '')
    })
});
