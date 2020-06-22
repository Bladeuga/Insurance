const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {
    when_asking_a_south_african_durban_client_for_their_phone_number_given_on_site_it_should_check_if_the_number_is_a_cellphone_number: () =>{
          //arrange
          let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(795242320);
          //act & //assert
          assertions.AssertPassingSpec(phoneNumberValidation.isCellPhoneNumber);
    },
    when_asking_a_south_african_durban_client_for_their_phone_number_given_on_site_it_should_check_if_the_number_is_a_land_number: () =>{
          //arrange
          let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(315242320);
          //act & //assert
          assertions.AssertPassingSpec(phoneNumberValidation.isLandPhoneNumber);
    },
    when_asking_a_south_african_durban_client_for_their_landphone_number_given_on_site_and_it_is_a_cellphone_number_it_should_fail: () => {
          //arrange
          let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(795242320);
          //act & //assert
          assertions.AssertFailingSpec(phoneNumberValidation.isLandPhoneNumber);
    },
    when_asking_a_south_african_durban_client_for_their_cellphone_number_given_on_site_and_it_is_a_land_number_it_should_fail: () => {
          //arrange
          let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(315242320);
          //act & //assert
          assertions.AssertFailingSpec(phoneNumberValidation.isCellPhoneNumber);
    },
      when_asking_a_south_african_durban_client_for_their_cellphone_number_given_on_site_and_the_starting_number_is_between_06_and_08_it_should_pass: () =>{
            //arrange
            let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(795242320);
            //act & //assert
            assertions.AssertPassingSpec(phoneNumberValidation.isCellPhoneNumber);
      },
      when_asking_a_south_african_durban_client_for_their_landphone_number_given_on_site_and_the_starting_number_is_between_01_and_05_it_should_pass: () =>{
            //arrange
            let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(315242320);
            //act & //assert
            assertions.AssertPassingSpec(phoneNumberValidation.isLandPhoneNumber);
      },
      when_asking_a_south_african_durban_client_for_their_cellphone_number_given_on_site_and_the_starting_number_is_not_between_06_and_08_it_should_fail: () =>{
            //arrange
            let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(0995242320);
            //act & //assert
            assertions.AssertFailingSpec(phoneNumberValidation.isCellPhoneNumber);
      },
      when_asking_a_south_african_durban_client_for_their_land_number_given_on_site_and_the_starting_number_is_not_between_01_and_05_it_should_fail: () =>{
            //arrange
            let phoneNumberValidation = new SouthAfricanPhoneNumberValidation(615242320);
            //act & //assert
            assertions.AssertFailingSpec(phoneNumberValidation.isLandPhoneNumber);
      }
}
