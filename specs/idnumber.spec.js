const IdNumberValidation = require("../lib/idnumbervalidation.js");

module.exports = {
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_valid_it_should_pass: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act
        try {
            passed = idNumberValidation.isValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_not_valid_it_should_fail: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(1234567890123);

        //act
        try {
            failed = idNumberValidation.isValid();
        } catch (err) {
            failed = false;
            errors = err;
        }

        //assert
        if (failed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}