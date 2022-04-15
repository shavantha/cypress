import PatientReg from '../../PageObjects/FOPatientRegistration'
import { Given , Then , When} from "cypress-cucumber-preprocessor/steps";
const faker = require("faker");

Given('I Login as the front officer by entering username as {string} and password as {string}', (UserName,Password) => {
    cy.fixture('PatientRegistration').then(function (data){
        this.PatientRegistration =data;
        cy.visit(this.PatientRegistration.url)  
    })
    cy.login(UserName,Password)
})

When ('I enter the patient information with below specifications and click Submit button', (dataTable) => {  
    dataTable.hashes().forEach(data => {

    const register = new PatientReg()
    const mobileNum  =faker.phone.phoneNumber('##########')
    const idNum = faker.phone.phoneNumber('##########')

    register.getRegisterMenu().click()
    register.getFirstName().type(data.FirstName)
    register.getFamilyName().type(data.LastName)
    register.getGender().click({force:true})
    register.getGenderOption().click()
    register.getNationality().click({force:true})
    register.getNationalityType().click()
    register.getDOB().type("01011970")
    register.getMobileNumber().type(mobileNum)
    register.getIDTypeOption().click({force:true})
    register.getIDTypeOptionSelect().click({force:true})
    register.getIDNumber().type(idNum)
    register.getButton().click({force:true})

});
})

Then ('system returns a success message', ()=>{ 
    const register = new PatientReg()
    expect(register.getSuccessMessage()).to.be.not.null;  
})