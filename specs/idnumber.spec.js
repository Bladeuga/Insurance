const IdNumberValidation = require("../lib/idnumbervalidation.js");

module.exports = {
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_thirteen_digits_it_should_pass: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act
        try {
            passed = idNumberValidation.isThirteenDigits();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_too_long_it_should_fail: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(12345678901231);

        //act
        try {
            failed = idNumberValidation.isThirteenDigits();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_too_short_it_should_fail: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(123456789012);

        //act
        try {
            failed = idNumberValidation.isThirteenDigits();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {

            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },when_asking_a_client_for_their_id_number_given_on_site_and_the_first_six_digits_is_a_valid_date_it_should_pass: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act
        try {
            passed = idNumberValidation.isSixDigitsDate();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_first_six_digits_is_not_a_valid_date_it_should_fail: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("9113459236080");

        //act
        try {
            failed = idNumberValidation.isSixDigitsDate();
        } catch (err) {
            failed = false;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {

            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_7th_to_10th_digits_are_over_5000_it_should_determine_male_gender: () =>{

        //arrange
        let passed = false;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("7607046305087");

        //act
        try {
            passed = idNumberValidation.isMale();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_7th_to_10th_digits_are_below_5000_it_should_determine_female_gender: () =>{

       //arrange
       let passed = false;
       let errors = "";
       let idNumberValidation = new IdNumberValidation("7607042654082");

        //act
        try {
            passed = idNumberValidation.isFemale();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_it_should_determine_if_you_are_a_south_african_citizen: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act
        try {
            passed = idNumberValidation.isSouthAfricanCitizen();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_it_should_determine_if_you_are_a_foreign_citizen: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(8602026186184);

        //act
        try {
            failed = idNumberValidation.isSouthAfricanCitizen();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_it_should_determine_if_you_are_a_foreign_citizen: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(8602026186184);

        //act
        try {
            failed = idNumberValidation.isSouthAfricanCitizen();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_valid_it_should_run_a_sequence_check: () =>{

        //arrange
        let passed = false;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(8602026186184);

        //act
        try {
            passed = idNumberValidation.isValidSequence();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_not_valid_it_should_run_a_sequence_check: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation(8602026186111);

        //act
        try {
            failed = idNumberValidation.isValidSequence();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed || failed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_valid_it_should_pass: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let idNumberValidation = new IdNumberValidation("8602026911086");

        //act
        try {
            passed = idNumberValidation.isValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed || passed === undefined) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}