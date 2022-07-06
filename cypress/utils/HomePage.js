class HomePage {

    getNavigationBar() {
        return cy.get('nav.gn.w-nav-menu > div#main_dd')
    }

    getTelehealthNavBarItem() {
        return cy.get('nav.gn.w-nav-menu a:nth-child(2)')
    }

    getExerciseLibraryNavBarItem() {
        return cy.get('nav.gn.w-nav-menu a:nth-child(3)')
    }

    getPricinghNavBarItem() {
        return cy.get('nav.gn.w-nav-menu a:nth-child(4)')
    }

    getTryDemoNavBarItem() {
        return cy.get('nav.gn.w-nav-menu a:nth-child(6)')
    }

    getLoginNavBarButton() {
        return cy.get('a#login')
    }

    getDemoModal() {
        return cy.get('div#demo-modal')
    }

    clickOnLoginNavBarButton() {
        this.getLoginNavBarButton().click()
    }

    //choosing server modal
    getServerCountry(country) {
        return cy.get('div.login-modal > div.modal-content > div > div:last-child > ul[role=list] > li:last-child > a > div').should('include.text', country)
    }

    clickOnServerCountry(country) {
        this.getServerCountry(country).click();
    }
}

export default HomePage;