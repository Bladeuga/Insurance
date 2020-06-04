
const EmailAddressValidation = require("../lib/emailaddressvalidation.js");

module.exports = {
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_an_at_symbol: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");
        let passed = true;
        let errors = "";

        //act
        try {
            passed = emailAddressValidation.hasAtSymbol();
        } catch (err) {
            errors = err;
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }

    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_an_at_symbol: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientAgmail.com");
        let failed = false;
        let errors = "";

        //act
        try {
            failed = emailAddressValidation.hasAtSymbol();
        } catch (err) {
            errors = err;
            failed = true;
        }

        //assert
        if (failed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }

    },
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_a_second_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");
        let passed = true;
        let errors = "";

        //act
        try {
            passed = emailAddressValidation.hasSecondLevelDomain();
        } catch (err) {
            errors = err;
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_a_second_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@.com");
        let failed = true;
        let errors = "";

        //act
        try {
            failed = emailAddressValidation.hasSecondLevelDomain();
        } catch (err) {
            errors = err;
            failed = true;
        }

        //assert
        if (failed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_there_is_a_top_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");
        let passed = true;
        let errors = "";

        //act
        try {
            passed = emailAddressValidation.hasTopLevelDomain();
        } catch (err) {
            errors = err;
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_an_invalid_emailaddress_given_on_site_it_should_check_if_there_is_a_top_level_domain: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.");
        let failed = true;
        let errors = "";

        //act
        try {
            failed = emailAddressValidation.hasTopLevelDomain();
        } catch (err) {
            errors = err;
            failed = true;
        }

        //assert
        if (failed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_an_emailaddress_given_not_on_site_it_should_check_if_it_is_correct: () => {
        
        //arrange
        const emailAddressValidation = new EmailAddressValidation("clientA@gmail.com");
        let passed = true;
        let errors = "";

        //act
        try {
            passed = emailAddressValidation.hasAtSymbol();
            if (passed){
                passed = emailAddressValidation.hasSecondLevelDomain();
            }
            if (passed){
                passed = emailAddressValidation.hasTopLevelDomain();
            }
        } catch (err) {
            errors = err;
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
}