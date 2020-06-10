
const FullNameValidation = require("../lib/FullnameValidation.js");
const assertions = require("../lib/assertions.js");

module.exports = {
    when_asking_a_client_for_a_fullname_given_on_site_and_100_characters_long_it_should_pass_the_validation_check: () => {
        
        //arrange
        const fullNameValidation = new FullNameValidation("12345678901234567890123456789012345678901","23456789012345678901234567890123456789012345678901234567890");

        //act & //assert
        assertions.AssertPassingSpec(fullNameValidation.isWithinRange);
    },
    when_asking_a_client_for_a_fullname_given_on_site_and_more_than_100_characters_long_it_should_fail_the_validation_check: () => {
        
        //arrange
        const fullNameValidation = new FullNameValidation(`Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth
            Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Zeus`); // one person with 26 firstnames

        //act & //assert
        assertions.AssertFailingSpec(fullNameValidation.isWithinRange);

    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Miss_it_should_accept_the_title: () =>{

        //arrange
        let fullNameValidation = new FullNameValidation("Harry","Potter","Miss");

        //act & //assert
        assertions.AssertPassingSpec(fullNameValidation.isTitleValid);
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Misses_it_should_accept_the_title: () =>{

        //arrange
        let fullNameValidation = new FullNameValidation("Harry","Potter","Mrs.");

        //act & //assert
        assertions.AssertPassingSpec(fullNameValidation.isTitleValid);
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Doctor_it_should_accept_the_title: () =>{

        //arrange
        let fullNameValidation = new FullNameValidation("Harry","Potter","Dr.");

        //act & //assert
        assertions.AssertPassingSpec(fullNameValidation.isTitleValid);
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Mister_it_should_accept_the_title: () =>{

        //arrange
        let fullNameValidation = new FullNameValidation("Harry","Potter","Mr.");

        //act & //assert
        assertions.AssertPassingSpec(fullNameValidation.isTitleValid);
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_apache_helicopter_it_should_not_accept_the_title: () =>{

        //arrange
        let fullNameValidation = new FullNameValidation("Harry","Potter","apache helicopter");

        //act & //assert
        assertions.AssertFailingSpec(fullNameValidation.isTitleValid);
    }
}