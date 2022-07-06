class ExercisesPage {

    getSubNavSection() {
        return cy.get('div.subnav-section')
    }

    getExercisesPageContent() {
        return cy.get('div.content:last-child')
    }

    verifyIfUserIsOnProperPageByCheckingItsName(pageName) {
        return cy.get('div.subnav-section > div.subnav-left > div')
                    .should('be.visible')
                    .and('include.text', pageName);
    }

    getNavTab(tabName) {
        return cy.get(`a#nav-tab-${tabName.toLowerCase()}`)
    }

    clickOnNavTab(tabName){
        this.getNavTab(tabName).click()
    }

    verifyIfUrlContains(url) {
        return cy.url().should('include', url)
    }
}

export default ExercisesPage;