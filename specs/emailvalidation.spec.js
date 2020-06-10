
const EmailAddressValidation = require("../lib/emailaddressvalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_an_at_symbol: () => {
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");

        //act & //assert
        assertions.AssertPassingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_an_at_symbol: () => {
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientAgmail.com");
      
        //act & //assert
        assertions.AssertFailingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_a_second_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");

        //act & //assert
        assertions.AssertPassingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_a_second_level_domain: () => {
        
         //arrange
         const emailAddressValidation = new EmailAddressValidation("clientA@.com");
      
         //act & //assert
         assertions.AssertFailingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_a_top_level_domain: () => {
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");

        //act & //assert
        assertions.AssertPassingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_a_top_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.");

        //act & //assert
        assertions.AssertFailingSpec(emailAddressValidation.isValid);
    },
    when_asking_a_client_for_an_emailaddress_given_not_on_site_it_should_check_if_it_is_correct: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");

        //act & //assert
        assertions.AssertPassingSpec(emailAddressValidation.isValid);
    },
}