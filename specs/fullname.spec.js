const FullNameValidation = require("../lib/FullnameValidation.js");

module.exports = {
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
    }
}