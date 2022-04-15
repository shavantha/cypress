class FOPatientRegistration {

getRegisterMenu (){
  return cy.get(':nth-child(3) > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root > .makeStyles-listItemCloseIcon-20 > svg')
}

getFirstName(){
  return cy.get('#firstName')
}

getFirstNameEn(){
  return cy.get('#firstNameEn')
}

getSecondName(){
  return cy.get('#secondNameEn')
}

getArabicFName(){
  return cy.get('#firstNameAr')
}

getArabicFamilyName(){
  return cy.get('#familyNameAr')
}

getPatientGender(){
  return cy.get('#genderId')
}

getSelectPatientGender(){
  return cy.get('.MuiList-root > [tabindex="0"]')
}

getFirstNameValidation(){
  return cy.get('.makeStyles-quickRegForm-695 > :nth-child(1) > :nth-child(1) > .MuiGrid-root')
}

getFamilyName(){
  return cy.get('#familyName')
}

getFamilyNameEn(){
  return cy.get('#familyNameEn')
}

getGender(){
  return cy.get('.MuiInputBase-root > #gender')
}

getGenderOption(){
  return cy.get('li[data-value="1"]')
}

getCountryCodeList(){
  return cy.get('.MuiInputBase-root > #country-code')
}

getCountryCodeOption(){
  return cy.get('.MuiList-root > :nth-child(1)')
}

getPhoneNumber(){
  return cy.get('#phone-number')
}
getMobileNumber(){
  return cy.get('#mobileNo')
}

getIDType(){
  return cy.get('#idType')
}

getIDTypeOption(){
  return cy.get('li[data-value="1"]')
}

getIqamaForPatinent(){
  return cy.get('[data-value="3"]')
}

getAddNewIDType(){
  return cy.get('.makeStyles-addIcon-52')
}

getBorderIDForPatient(){
  return cy.get('[data-value="4"]')
}

getExPDateforIqama(){
  return cy.get('#patientIdentities\\[0\\]\\.expiaryDate')
}

getExPDateforBorderID(){
  return cy.get('#patientIdentities\\[1\\]\\.expiaryDate')
}

getChangePrimaryIDBtn(){
  return cy.get('#mark-primary-Identity-btn')
}

getPrimaryLabel(){
  return cy.get('.makeStyles-primaryIDTypeGridWrapper-749 > .MuiGrid-root')
}

getIDTypeOptionSelect(){
  return cy.get('[data-value="3"]')
}

getNationalityForPatientReg(){
  return cy.get('#nationalityId')
}
getNationalIDNumber(){
  return cy.get('#patientIdentities\\[0\\]\\.value')
}

getBorderIDNumber(){
  return cy.get('#patientIdentities\\[1\\]\\.value')
}

getNextButton(){
  return cy.get('#next-btn-patient-reg')
}
getIDNumber(){
  return cy.get('#idNo')
}

getEmergencyContactPerson(){
  return cy.get('#emergencyContactPerson')
}

getPayerTypeOption(){
  return cy.get('#insurancePolicies\\[0\\]\\.payerTypeId')
}

getPayerTypeSelf(){
  return cy.get('.MuiList-root > [tabindex="0"]')
}

getEmergencyContactNumber(){
  return cy.get('#emergencyContactNumber')
}

getButton(){
  return cy.get('#quickRegBtn') 
}

getFamilyNameValidation(){
  return cy.get('.makeStyles-quickRegForm-695 > :nth-child(2) > :nth-child(1) > .MuiGrid-root')
}

getGenderError(){
  return cy.get('#root > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-container > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4 > div > div > div.MuiGrid-root.makeStyles-quickRegWithId-339 > div.MuiGrid-root.makeStyles-quickRegForm-310.MuiGrid-container > div:nth-child(3) > div.MuiGrid-root > div')
}

getRegistrationPage(){
  return cy.get('#patientRegBtn')
}

getPatientType(){
  return cy.get('#patientType')
}

getPatientTypeOption(){
  return cy.get('[data-value="3"]')
}

getGenderType(){
  return cy.get('li[data-value="1"]')  
}

getTitleID(){
  return cy.get('#titleId')
}

getTitleOption(){
  return cy.get('.MuiList-root > [tabindex="0"]')
}

getNationality(){
  return cy.get('.MuiInputBase-root > #nationality')
}

getNationalityList(){
  return cy.get('[data-value="3"]')
}

getBirthDate(){
  return cy.get('#multi-date-picker')
}

getPatientDOB(){
  return cy.get(':nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root')
}

getIDTypeList(){
  return cy.get('#patientIdentities\\[0\\]\\.identityTypeId')
}

getSecondIDTypeList(){
  return cy.get('#patientIdentities\\[1\\]\\.identityTypeId')
}

getIDTypeOption(){
  return cy.get('.MuiInputBase-root > #idType')
}

getSaudiNational(){
  return cy.get('[data-value="6"]')
}

getNationalityType(){
  return cy.get('[data-value="2"]')
}

GetIDType(){
  return cy.get('div[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]').eq(7)
}

getDOB(){
  return cy.get('#multi-date-picker')
}

getDOBPopUp(){
  return cy.get(':nth-child(1) > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > img')
}

getArabicOption(){
  return cy.get('[title="Arabic"]')
}

getDateOption(){
  return cy.get(':nth-child(1) > .sd')
}

getIDNumberValidation(){
  return cy.get('.makeStyles-validation-697')
}

getMobileNumberValidation(){
  return cy.get('p.MuiTypography-root.makeStyles-validation-697.MuiTypography-body2')
}

getSubmitButton(){
  return cy.get('#submit-btn-patient-reg')
}

getNavigateToContactPage(){
  return cy.get(':nth-child(2) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .makeStyles-root-738')
}

getNavigateToBasicPage(){
  return cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .makeStyles-root-738')
}

getNavigateToGuardianDetailPage(){
  return cy.get(':nth-child(3) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .makeStyles-root-738')
}

getSaveConfirmation(){
  return cy.get('.MuiSnackbar-root > .MuiPaper-root')
}

getBasicDetailsTAB(){
  return cy.get(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .makeStyles-root-736 > span > img')
}

getCountryCode(){
  return cy.get('.MuiInputBase-root > #country-code')
}

getSuccessMessage(){
  return cy.get('#client-snackbar')
}

getIDTypeError(){
  return cy.get(':nth-child(1) > [style="position: relative; width: 100%;"] > [style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getExpDateError(){
  return cy.get('[style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getMobileNumberError(){
  return cy.get('[style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getGuardianError(){
  return cy.get('[style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getDuplicateNumberMessage(){
  return cy.get('[style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getPayerTypeError(){
  return cy.get(':nth-child(1) > [style="position: relative; width: 100%;"] > [style="background-color: rgb(247, 250, 253); color: rgb(244, 5, 5);"]')
}

getContactDetailsTab(){
  return cy.get(':nth-child(2) > .MuiStepLabel-root > .MuiStepLabel-iconContainer > .makeStyles-root-738 > span > img')
}

getPermanentRegister(){
  return cy.get('#permanentEdit')
}

getPaymentButton(){
  return cy.get('#add-payment-btn')
}

getPayerTypeDropdown(){
  return cy.get('#payerTypeId')
}

getPayerTypeOptionValue(){
  return cy.get('.MuiList-root > [tabindex="0"]')
}

getSavePayerType(){
  return cy.get('.MuiDialogActions-root > .MuiButtonBase-root')
}

getUpdateConfirmation(){
  return cy.get('#update')
}

getConfirmRedirect(){
  return cy.get('#redirectPage')
}
}

export default FOPatientRegistration