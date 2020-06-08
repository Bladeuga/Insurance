
const FullNameValidation = require("../lib/FullnameValidation.js");

module.exports = {
    when_asking_a_client_for_a_fullname_given_on_site_and_100_characters_long_it_should_pass_the_validation_check: () => {
        
        //arrange
        const fullNameValidation = new FullNameValidation("12345678901234567890123456789012345678901","23456789012345678901234567890123456789012345678901234567890");
        let failed = true;
        let errors = "";

        //act
        try {
            failed = fullNameValidation.isTooLong();
        } catch (err) {
            errors = err;
            failed = false;
        }

        //assert
        if (failed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }

    },
    when_asking_a_client_for_a_fullname_given_on_site_and_more_than_100_characters_long_it_should_fail_the_validation_check: () => {
        
        //arrange
        const fullNameValidation = new FullNameValidation(`Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth
            Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Zeus`); // one person with 26 firstnames
        let failed = true;
        let errors = "";

        //act
        try {
            failed = fullNameValidation.isTooLong();
        } catch (err) {
            errors = err;
            falied = false;
        }

        //assert
        if (!failed){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }

    },
    when_asking_a_client_for_their_fullname_given_on_site_and_it_is_too_long_it_should_determine_initials: () =>{
        
        //arrange
        const fullNameValidation = new FullNameValidation("Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Zeus", "Wolfeschlegel­steinhausen­bergerdorff­welche­vor­altern­waren­gewissenhaft­schafers­wessen­schafe­waren­wohl­gepflege­und­sorgfaltigkeit­beschutzen­vor­angreifen­durch­ihr­raubgierig­feinde­welche­vor­altern­zwolfhundert­tausend­jahres­voran­die­erscheinen­von­der­erste­erdemensch­der­raumschiff­genacht­mit­tungstein­und­sieben­iridium­elektrisch­motors­gebrauch­licht­als­sein­ursprung­von­kraft­gestart­sein­lange­fahrt­hinzwischen­sternartig­raum­auf­der­suchen­nachbarschaft­der­stern­welche­gehabt­bewohnbar­planeten­kreise­drehen­sich­und­wohin­der­neue­rasse­von­verstandig­menschlichkeit­konnte­fortpflanzen­und­sich­erfreuen­an­lebenslanglich­freude­und­ruhe­mit­nicht­ein­furcht­vor­angreifen­vor­anderer­intelligent­geschopfs­von­hinzwischen­sternartig­raum");
        let initials = "";
        const expectedInitials = "A. B. C. D. E. F. G. H. I. J. K. L. M. N. O. P. Q. R. S. T. U. V. W. X. Y. Z.";
        let errors = "";

        //act
        try {
            initials = fullNameValidation.getInitials();
        } catch (err) {
            errors = err;
        }

        //assert
        if (!initials || initials !== expectedInitials) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Miss_it_should_accept_the_title: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let fullnameValidation = new FullNameValidation("Harry","Potter","Miss");

        //act
        try {
            passed = fullnameValidation.isTitleValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Misses_it_should_accept_the_title: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let fullnameValidation = new FullNameValidation("Harry","Potter","Mrs.");

        //act
        try {
            passed = fullnameValidation.isTitleValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Doctor_it_should_accept_the_title: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let fullnameValidation = new FullNameValidation("Harry","Potter","Dr.");

        //act
        try {
            passed = fullnameValidation.isTitleValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_Mister_it_should_accept_the_title: () =>{

        //arrange
        let passed = true;
        let errors = "";
        let fullnameValidation = new FullNameValidation("Harry","Potter","Mr.");

        //act
        try {
            passed = fullnameValidation.isTitleValid();
        } catch (err) {
            passed = false;
            errors = err;
        }

        //assert
        if (!passed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    },
    when_asking_a_client_for_their_title_given_on_site_and_the_title_is_apache_helicopter_it_should_not_accept_the_title: () =>{

        //arrange
        let failed = true;
        let errors = "";
        let fullnameValidation = new FullNameValidation("Harry","Potter","apache helicopter");

        //act
        try {
            failed = fullnameValidation.isTitleValid();
        } catch (err) {
            failed = true;
            errors = err;
        }

        //assert
        if (failed) {
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}