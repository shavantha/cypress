Feature: Registering a patient in Infirma I want to login as a front officer and register a patient
 Scenario: Perform a quick registration
 Given I Login as the front officer by entering username as "Lamitta" and password as "Iihs@123"
 When I enter the patient information with below specifications and click Submit button
 | FirstName  | LastName |
 | Rumesh | Silva |
 Then system returns a success message