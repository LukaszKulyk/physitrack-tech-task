import HomePage from '../utils/HomePage';
import ExercisesPage from '../utils/ExercisesPage';
import PatientsPage from '../utils/PatientsPage';

describe('Demo Account Flow - assign new exercise to Demo patient program. ', () => {

    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.visit('/');

        const homePage = new HomePage();

        homePage
            .getNavigationBar().should('exist').and('be.visible');

        homePage
            .getTelehealthNavBarItem().should('exist').and('be.visible');

        homePage
            .getExerciseLibraryNavBarItem().should('exist').and('be.visible');

        homePage
            .getPricinghNavBarItem().should('exist').and('be.visible');

        homePage
            .getTryDemoNavBarItem().should('exist').and('be.visible');

        homePage
            .getDemoModal().should('exist').and('not.be.visible');
    })

    it('Verify if Bird dog exercise can be correctly added to the Demo patient program.', () => {

        const homePage = new HomePage();

        homePage
            .clickOnLoginNavBarButton();

        homePage
            .clickOnServerCountry('USA');

        const exercisesPage = new ExercisesPage();

        //exercises page
        exercisesPage
            .verifyIfUrlContains('/exercises')

        exercisesPage
            .getSubNavSection().should('exist').and('be.visible');

        exercisesPage
            .getExercisesPageContent().should('exist').and('be.visible');

        exercisesPage
            .verifyIfUserIsOnProperPageByCheckingItsName('Library');

        //verify if nav tabs are visible
        exercisesPage
            .getNavTab('library')

        exercisesPage
            .getNavTab('connect')

        exercisesPage
            .clickOnNavTab('clients')

        exercisesPage
            .verifyIfUrlContains('/clients')

        exercisesPage
            .verifyIfUserIsOnProperPageByCheckingItsName('Patients');

        const patientsPage = new PatientsPage();

        //find and click on All patients tab
        patientsPage
            .clickOnAllPatientsTab()

        patientsPage
            .clickOnDemoPatient()

        //Verify if user is on proper site
        patientsPage
            .getModalTitle()

        patientsPage
            .getClientNewProgramBar()

        patientsPage
            .getChartsContainer()

        patientsPage
            .verifyIfUserIsOnPatientsDetailsPage()


        //selecting new exercise part
        patientsPage
            .clickOnViewProgramAnchor();

        //program editor should be opened
        patientsPage
            .verifyIfProgramEditorHasBeenOpened();

        //verify if settings button exists and is visible
        patientsPage
            .verifyIfSettingsAnchorExistsAndIsVisible();

        patientsPage
            .clickOnAddExerciseAnchor();

        //verify if user can see modifying exercises modal dialog
        patientsPage
            .verifyIfPseudoModalExistsAndIsVisible();

        patientsPage
            .verifyIfExerciseComponentExistsAndIsVisible();

        patientsPage
            .searchTextInSearchExerciseInput('Bird dog{enter}');

        //verify if first element in the list is Bird dog
        patientsPage
            .verifyIfFirstElementOnTheListHasTitle('Bird dog');

        patientsPage
            .verifyIfNavCounterHasProperValue('14');

        //Close additional login modal
        cy.get('div.pseudo-modal-nav:first-child').click({force: true});
        cy.get('#welcome-modal > div.modal-nav.w-row > div:nth-child(1) > a').click({multiple: true, force: true})
        cy.get('#welcome-modal > div.modal-nav.w-row > div:nth-child(1) > a').click({multiple: true, force: true})

        patientsPage
            .clickOnAnchorWhichAddsNewExerciseForFirstElementFromTheList();

        patientsPage
            .verifyIfNavCounterHasProperValue('14');

        patientsPage
            .clickDoneAnchor();

        patientsPage
            .verifyIfSelectedExerciseIsProperlyAddedToTheProgram('Bird dog');
    
    })

    after(() => {
        //add cleaning after test
        const patientsPage = new PatientsPage();

        patientsPage
            .removeLastAddedExerciseFromProgram();

        patientsPage
            .verifyIfExerciseIsProperlyDeletedFromTheProgram('Bird dog');
    })
})