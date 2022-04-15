Feature: Login to Infirma
     Scenario Outline: Login to Infirma
      Given User is on the login page
      When The user enters username as '<username>' and password as '<password>'
      And User Clicks on Login Button
      Then The user should be able to login as '<username>'
      Examples:
          |username |password|
          |lamitta|Iihs@123|
          |nilmini|Iihs@123|
          |aditya|Iihs@123|
          