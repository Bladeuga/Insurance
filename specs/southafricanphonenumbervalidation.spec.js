const SouthAfricanPhoneNumberProviderValidation = require("../lib/southafricanphonenumberprovidervalidation.js");
const SouthAfricanPhoneNumberProvinceValidation = require("../lib/southafricanphonenumberprovincevalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {
    when_asking_a_south_african_client_for_a_valid_cellphone_number_given_on_site_it_should_check_if_the_number_is_a_MTN_cellphone_number: () =>{
          //arrange
          let cellPhoneNumbers = require("./cellphonenumberprovider.json");
          let provider = "MTN"
          let phoneNumberValidation = new SouthAfricanPhoneNumberProviderValidation(603242320,provider,cellPhoneNumbers);
          //act & //assert
          assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_valid_landphone_number_given_on_site_it_should_check_if_the_number_is_a_KZN_land_number: () =>{
          //arrange
          let landPhoneNumbers = require("./landphonenumberprovince.json");
          let province = "Kwa-Zulu Natal"
          let phoneNumberValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,province,landPhoneNumbers);
          //act & //assert
          assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_invalid_landphone_number_given_on_site_and_it_is_a_MTN_cellphone_number_it_should_fail: () => {
          //arrange
          let cellPhoneNumbers = require("./cellphonenumberprovider.json");
          let provider = "MTN"
          let phoneNumberValidation = new SouthAfricanPhoneNumberProviderValidation(313242320,provider,cellPhoneNumbers);
          //act & //assert
          assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_invalid_cellphone_number_given_on_site_and_it_is_a_KZN_landphone_number_it_should_fail: () => {
          //arrange
          let landPhoneNumbers = require("./landphonenumberprovince.json");
          let province = "Kwa-Zulu Natal"
          let phoneNumberValidation = new SouthAfricanPhoneNumberProvinceValidation(605242320,province,landPhoneNumbers);
          //act & //assert
          assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
      when_asking_a_south_african_client_for_a_valid_cellphone_number_given_on_site_and_the_starting_MTN_cellphone_number_is_between_06_and_08_it_should_pass: () =>{
            //arrange
            let cellPhoneNumbers = require("./cellphonenumberprovider.json");
            let provider = "MTN"
            let phoneNumberValidation = new SouthAfricanPhoneNumberProviderValidation(795242320,provider,cellPhoneNumbers);
            //act & //assert
            assertions.AssertPassingSpec(phoneNumberValidation.isValid);
      },
      when_asking_a_south_african_client_for_a_valid_landphone_number_given_on_site_and_the_starting_KZN_landphone_number_is_between_01_and_05_it_should_pass: () =>{
            //arrange
            let landPhoneNumbers = require("./landphonenumberprovince.json");
            let province = "Kwa-Zulu Natal"
            let phoneNumberValidation = new SouthAfricanPhoneNumberProvinceValidation(315242320,province,landPhoneNumbers);
            //act & //assert
            assertions.AssertPassingSpec(phoneNumberValidation.isValid);
      },
      when_asking_a_south_african_client_for_a_invalid_cellphone_number_given_on_site_and_the_starting_MTN_cellphone_number_is_between_06_and_08_it_should_fail: () =>{
            //arrange
            let cellPhoneNumbers = require("./cellphonenumberprovider.json");
            let provider = "MTN"
            let phoneNumberValidation = new SouthAfricanPhoneNumberProviderValidation(0995242320,provider,cellPhoneNumbers);
            //act & //assert
            assertions.AssertFailingSpec(phoneNumberValidation.isValid);
      },
      when_asking_a_south_african_client_for_a_invalid_landphone_number_given_on_site_and_the_starting_KZN_landphone_number_is_between_01_and_05_it_should_fail: () =>{
            //arrange
            let landPhoneNumbers = require("./landphonenumberprovince.json");
            let province = "Kwa-Zulu Natal"
            let phoneNumberValidation = new SouthAfricanPhoneNumberProvinceValidation(615242320,province,landPhoneNumbers);
            //act & //assert
            assertions.AssertFailingSpec(phoneNumberValidation.isValid);
      }
}
