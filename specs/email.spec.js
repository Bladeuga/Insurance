
const Contact = require("./../lib/contact.js")
module.exports = {
    when_asking_a_client_for_an_emailaddress_given_on_site_it_should_check_if_it_is_correct: () => {
        
        //arrange
        const emailAddress = "clientA@gmail.com";
        const contact = new Contact();
        let passed = true;
        let errors = "";

        //act
        try {
            passed = contact.validateEmailAddress(emailAddress);
        } catch (err) {
            errors = err.ToString();
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }

    },
    when_asking_a_client_for_an_emailaddress_given_over_the_phone: () => {
        
        //arrange
        const emailAddress = "clientA@gmail.com";
        const contact = new Contact();
        let passed = true;
        let errors = "";

        //act
        try {
            passed = contact.validateEmailAddress(emailAddress);
        } catch (err) {
            errors = err.ToString();
            passed = false;
        }

        //assert
        if (!passed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}