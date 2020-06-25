const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {

    when_asking_a_south_african_durban_client_for_a_valid_cell_phone_number_given_on_site_and_it_is_9_digits_long_it_should_pass: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(795242320,cellPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_invalid_cell_phone_number_given_on_site_and_it_is_8_digits_long_it_should_fail: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(79524232,cellPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_valid_cell_phone_number_given_on_site_and_it_is_10_digits_long_it_should_pass: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("0795242320",cellPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_invalid_cell_phone_number_given_on_site_and_it_is_11_digits_long_it_should_fail: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("07952423200",cellPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_valid_cell_phone_number_given_on_site_and_it_starts_with_plus27_it_should_pass: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+270795242320",cellPhoneNumbers);
        //act & //assert
        assertions.AssertPassingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_durban_client_for_a_invalid_cell_phone_number_given_on_site_and_it_starts_with_plus27_it_should_fail: () =>{
        //arrange
        let cellPhoneNumbers = require("./cellphonenumberprovider.json");
        let phoneNumberValidation = new SouthAfricanPhoneNumberValidation("+2707952423200",cellPhoneNumbers);
        //act & //assert
        assertions.AssertFailingSpec(phoneNumberValidation.isValid);
    },
    when_asking_a_south_african_client_for_a_valid_cellphone_number_given_on_site_and_the_starting_number_is_MTN_0603_it_should_pass: () => {
          //arrange
          let cellPhoneNumbers = require("./cellphonenumberprovider.json");
          let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(603242320,cellPhoneNumbers);
          //act & //assert
          assertions.AssertPassingSpec(phoneNumberValidation.isCellPhoneNumber);
    },
    when_asking_a_south_african_client_for_a_valid_cellphone_number_given_on_site_and_the_starting_number_is_Vodacom_0606_it_should_pass: () => {
           //arrange
           let cellPhoneNumbers = require("./cellphonenumberprovider.json");
           let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(606242320,cellPhoneNumbers);
           //act & //assert
           assertions.AssertPassingSpec(phoneNumberValidation.isCellPhoneNumber);
    }
}