const PhoneNumberValidation = require("../lib/phonenumbervalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {

    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_9_digits_long_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation(315242325);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_8_digits_long_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation(31524232);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_10_digits_long_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation(315242325);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_11_digits_long_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation(3152423251);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_starts_with_plus27_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation("+270315242320");
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_starts_with_plus27_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new PhoneNumberValidation("+2703152423201");
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    }
}