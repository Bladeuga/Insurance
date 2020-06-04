
const FullnameValidation = require("../lib/FullnameValidation.js");

module.exports = {
    when_asking_a_client_for_a_fullname_given_on_site_and_100_characters_long_it_should_pass_the_validation_check: () => {
        
        //arrange
        const fullNameValidation = new FullnameValidation(`1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890`);
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
        const fullNameValidation = new FullnameValidation(`Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth
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
        const fullNameValidation = new FullnameValidation(`Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd Martin Nero 
        Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Zeus 
        Wolfeschlegel­steinhausen­bergerdorff­welche­vor­altern­waren­gewissenhaft­schafers­wessen­schaf
        e­waren­wohl­gepflege­und­sorgfaltigkeit­beschutzen­vor­angreifen­durch­ihr­raubgierig­feinde­welche­v
        or­altern­zwolfhundert­tausend­jahres­voran­die­erscheinen­von­der­erste­erdemensch­der­raumschiff­gena
        cht­mit­tungstein­und­sieben­iridium­elektrisch­motors­gebrauch­licht­als­sein­ursprung­von­kraft­gestart­
        sein­lange­fahrt­hinzwischen­sternartig­raum­auf­der­suchen­nachbarschaft­der­stern­welche­gehabt­bewohnba
        r­planeten­kreise­drehen­sich­und­wohin­der­neue­rasse­von­verstandig­menschlichkeit­konnte­fortpflanzen­un
        d­sich­erfreuen­an­lebenslanglich­freude­und­ruhe­mit­nicht­ein­furcht­vor­angreifen­vor­anderer­intelligent­ge
        schopfs­von­hinzwischen­sternartig­raum`);
        let initials = "";
        let errors = "";

        //act
        try {
            initials = fullNameValidation.getInitials();
        } catch (err) {
            errors = err;
        }

        //assert
        if (!initials){
            const message = `TEST FAILED: ${errors}`;
            throw new Error(message);
        }
    }
}