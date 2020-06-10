const IdNumberValidation = require("../lib/idnumbervalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_thirteen_digits_it_should_pass: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isThirteenDigits);

    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_too_long_it_should_fail: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation(12345678901231);

         //act & //assert
         assertions.AssertFailingSpec(idNumberValidation.isThirteenDigits);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_too_short_it_should_fail: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation(123456789012);

         //act & //assert
         assertions.AssertFailingSpec(idNumberValidation.isThirteenDigits);

    },when_asking_a_client_for_their_id_number_given_on_site_and_the_first_six_digits_is_a_valid_date_it_should_pass: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isSixDigitsDate);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_first_six_digits_is_not_a_valid_date_it_should_fail: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("9113459236080");

        //act & //assert
        assertions.AssertFailingSpec(idNumberValidation.isSixDigitsDate);

    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_7th_to_10th_digits_are_over_5000_it_should_determine_male_gender: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("7607046305087");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isMale);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_the_7th_to_10th_digits_are_below_5000_it_should_determine_female_gender: () =>{

       //arrange
       let idNumberValidation = new IdNumberValidation("7607042654082");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isFemale);

    },
    when_asking_a_client_for_their_id_number_given_on_site_it_should_determine_if_you_are_a_south_african_citizen: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("9101059236080");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isSouthAfricanCitizen);
    },
    when_asking_a_client_for_their_id_number_given_on_site_it_should_determine_if_you_are_a_foreign_citizen: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation(8602026186184);

        //act & //assert
        assertions.AssertFailingSpec(idNumberValidation.isSouthAfricanCitizen);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_valid_it_should_run_a_sequence_check: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation(8602026186184);

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isValidSequence);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_not_valid_it_should_run_a_sequence_check: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation(8602026186111);

        //act & //assert
        assertions.AssertFailingSpec(idNumberValidation.isValidSequence);
    },
    when_asking_a_client_for_their_id_number_given_on_site_and_it_is_valid_it_should_pass: () =>{

        //arrange
        let idNumberValidation = new IdNumberValidation("8602026911086");

        //act & //assert
        assertions.AssertPassingSpec(idNumberValidation.isValid);
    }
}