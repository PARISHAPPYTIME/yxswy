describe('create a message', () => {
    it('display a message in the list ', () => {
        /// 访问 url 路径
        cy.visit('http://localhost:3000')

        // 找到元素并输入内容
        cy.get("[data-test='messageText']").type('new message')

        // 找到按钮并点击
        cy.contains('send').click()

        cy.get("[data-test='messageText']").should("have.value", "")

        cy.contains("new message")
    })
})
