const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
const SouthAfricanPhoneNumberProvinceValidation = require("../lib/southafricanphonenumberprovincevalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {

    when_asking_a_south_african_durban_client_for_a_valid_land_phone_number_given_on_site_and_it_is_9_digits_long_it_should_pass: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(315242325,landPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_invalid_land_phone_number_given_on_site_and_it_is_8_digits_long_it_should_fail: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(31524232,landPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_valid_land_phone_number_given_on_site_and_it_is_10_digits_long_it_should_pass: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("0315242320",landPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_a_invalid_land_phone_number_given_on_site_and_it_is_11_digits_long_it_should_fail: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("03152423200",landPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_valid_land_phone_number_given_on_site_and_it_starts_with_plus27_it_should_pass: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+270315242320",landPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_invalid_land_phone_number_given_on_site_and_it_starts_with_plus27_it_should_fail: () =>{
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+2703152423201",landPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_valid_landphone_number_given_on_site_and_the_starting_number_is_031_and_the_province_is_KZN_it_should_pass: () => {
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,"Kwa-Zulu Natal",landPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_invalid_landphone_number_given_on_site_and_the_starting_number_is_031_and_the_province_is_capetown_it_should_fail: () => {
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,"Cape Town",landPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_valid_landphone_number_given_on_site_and_the_starting_number_is_021_and_the_province_is_capetown_it_should_pass: () => {
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(215242320,"Cape Town",landPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_invalid_landphone_number_given_on_site_and_the_starting_number_is_021_and_the_province_is_durban_it_should_fail: () => {
        //arrange
        let landPhoneNumbers = require("./landphonenumberprovince.json");
        let southAfricanPhoneNumberProvinceValidation = new SouthAfricanPhoneNumberProvinceValidation(215242320, "Durban",landPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(southAfricanPhoneNumberProvinceValidation.isValid);
    }
}