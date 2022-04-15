import { And, Given , Then , When} from "cypress-cucumber-preprocessor/steps";
import UserLogin from '../../PageObject/UserLogin'
Given('User is on the login page', () => {
    cy.viewport(1000, 660) 
    cy.fixture('UserLogin').then(function (data){
        this.UserLogin =data;
        cy.visit(this.UserLogin.url)  
    })
})
When('The user enters username as {string} and password as {string}', (UserName, Password) =>{
    cy.login(UserName,Password)
    
})
And('User Clicks on Login Button',()=>{
    cy.get('#loginButton').click({force:true});  


})
Then('The user should be able to login as {string}',(UserName) =>{

    const userLogin =new UserLogin()
    userLogin.getMenu().click({multiple:true})
    userLogin.getFirstName().then($UserName =>{
        const name=$UserName.text()
        expect(name).contains(name ,{ matchCase: false })
    })
    
})

