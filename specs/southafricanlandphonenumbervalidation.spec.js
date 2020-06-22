const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
const SouthAfricanPhoneNumberProvinceValidation = require("../lib/southafricanphonenumberprovincevalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {

    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_9_digits_long_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(315242325);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_8_digits_long_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(31524232);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_10_digits_long_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("0315242320");
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_11_digits_long_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("03152423200");
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_valid_and_starts_with_plus27_it_should_pass: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+270315242320");
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_their_land_phone_number_given_on_site_and_it_is_not_valid_and_starts_with_plus27_it_should_fail: () =>{
        //arrange
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+2703152423201");
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_their_landphone_number_given_on_site_and_the_starting_number_is_031_and_the_province_is_durban_it_should_pass: () => {
        //arrange
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,"Durban");

        //act & //assert
        assertions.AssertPassingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_their_landphone_number_given_on_site_and_the_starting_number_is_031_and_the_province_is_capetown_it_should_fail: () => {
        //arrange
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,"Cape Town");

        //act & //assert
        assertions.AssertFailingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_their_landphone_number_given_on_site_and_the_starting_number_is_021_and_the_province_is_capetown_it_should_pass: () => {
        //arrange
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(215242320,"Cape Town");

        //act & //assert
        assertions.AssertPassingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_their_landphone_number_given_on_site_and_the_starting_number_is_021_and_the_province_is_durban_it_should_fail: () => {
        //arrange
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(215242320, "Durban");

        //act & //assert
        assertions.AssertFailingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    }
}