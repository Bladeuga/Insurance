const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
module.exports = function SouthAfricanPhoneNumberProviderValidation(phoneNumber, provider,phoneNumberLookups) {
    const _southAfricanPhoneNumberValidation = new SouthAfricanPhoneNumberValidation(phoneNumber,phoneNumberLookups);
    const _phoneNumber = phoneNumber.toString();
    this.isValid = () => {
        let expectedCode = `0${_phoneNumber.substring(0, 1)}`;
        const matchFound = phoneNumberLookups.find(x => x.name === provider && expectedCode.startsWith(x.code));
        if (matchFound && _southAfricanPhoneNumberValidation.isValid()){
            return true;
        }
        return false;
    }
};