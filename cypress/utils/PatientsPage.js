class PatientsPage {

    getAllPatientsTab() {
        return cy.get('div.subnav-tab-container > a:first-child')
                    .should('include.text', 'All patients')
    }

    clickOnAllPatientsTab() {
        this.getAllPatientsTab().click();
    }

    getDemoPatientFromTheList() {
        return cy.get('a.client-link > div > div.content-link > strong')
                    .should('include.text', 'Demo-patient')
    }

    clickOnDemoPatient() {
        this.getDemoPatientFromTheList().click();
    }

    getModalTitle() {
        return cy.get('div.modal-title')
    }

    getClientNewProgramBar() {
        return cy.get('div.client-new-program')
    }

    getChartsContainer() {
        return cy.get('div.charts-container')
    }

    verifyIfUserIsOnPatientsDetailsPage() {
        return cy.get('div.prog-nav > div:first-child > a')
            .should('be.visible')
            .and('include.text', 'Patients');
    }

    getViewProgramAnchor() {
        return cy.get("a.btn-link[href^='/exercise_programs/']")
                    .should('include.text', 'View program')
    }

    clickOnViewProgramAnchor() {
        this.getViewProgramAnchor().click()
    }

    //program editor
    verifyIfProgramEditorHasBeenOpened() {
        return cy.get('div[id^=ProgramEditor]')
                    .should('exist')
                    .and('be.visible');
    }

    getSettingsAnchor() {
        return cy.get('a#assign-program-modal-button')
    }

    verifyIfSettingsAnchorExistsAndIsVisible() {
        this.getSettingsAnchor()
            .should('exist')
            .and('be.visible');
    }

    getAddExerciseAnchor() {
        return cy.get('a.add-exercise')
    }

    clickOnAddExerciseAnchor() {
        this.getAddExerciseAnchor().click()
    }

    getPseudoModal() {
        return cy.get('div.pseudo-modal-nav')
    }

    verifyIfPseudoModalExistsAndIsVisible() {
        return this.getPseudoModal()
                    .should('exist').and('be.visible');
    }

    getExercisesComponent() {
        return cy.get('div.exercises-component')
    }

    verifyIfExerciseComponentExistsAndIsVisible() {
        return this.getExercisesComponent()
                    .should('exist').and('be.visible');
    }

    getSearchExerciseInput() {
        return cy.get('div.search-input-box > input')
    }

    searchTextInSearchExerciseInput(text) {
        const field = this.getSearchExerciseInput();
        field.clear();
        field.type(text);

        return this;
    }

    verifyIfFirstElementOnTheListHasTitle(title) {
        return cy.get(`div.list-content-container:first-child > a[title='${title}']`)
                    .should('exist')
                    .and('be.visible');
    }

    getElementFromListWhichContainsText(text) {
        return cy.get(`div.list-content-container:first-child > div.lc-text > a[title='${text}']`)
    }

    verifyIfFirstElementFromTheListHasProperTextAndExistsAndIsVisible(text) {
        return this.getElementFromListWhichContainsText(text)
                    .should('exist')
                    .and('be.visible');
    }

    clickOnAnchorWhichOpensNewExerciseModalForFirstElementFromTheListWhichHasText(text) {
        this.getElementFromListWhichContainsText(text)
            .click();
    }

    getNavCounter() {
        return cy.get("a[title='Edit program'] > div.nav-counter")
    }

    verifyIfNavCounterHasProperValue(count) {
        return this.getNavCounter().should('have.text', count)
    }

    getExerciseCheckboxForFirstElementFromList() {
        return cy.get("div.list-content-container:first-child > div:first-child > a > img.cb.exercise-checkbox")
    }

    clickOnAnchorWhichAddsNewExerciseForFirstElementFromTheList() {
        this.getExerciseCheckboxForFirstElementFromList()
            .click();
    }

    getDoneAnchor() {
        return cy.get("div.pseudo-modal-nav > div > a[href^='/exercise_programs/']")
    }

    clickDoneAnchor() {
        this.getDoneAnchor()
            .click()
    }

    verifyIfSelectedExerciseIsProperlyAddedToTheProgram(exercise) {
        return cy.get("div.program-day > div > div.w-row:last-child > div.pd-day:last-child > div.pd-ex > a.w-inline-block > div ")
                    .should('include.text', exercise);
    }

    removeLastAddedExerciseFromProgram() {
        cy.get("div.program-day > div > div.w-row:last-child > div.pd-day:last-child > div.pd-ex > img.pd-ex-rem")
            .click()
    }

    verifyIfExerciseIsProperlyDeletedFromTheProgram(exercise) {
        return cy.get("div.program-day > div > div.w-row:last-child > div.pd-day:last-child > div.pd-ex > a.w-inline-block > div ")
                    .should('not.include.text', exercise);
    }

}

export default PatientsPage;