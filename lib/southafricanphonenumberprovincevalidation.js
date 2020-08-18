const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
module.exports = function SouthAfricanPhoneNumberProvinceValidation(phoneNumber, province, landphonenumberprovince) {
    const _southAfricanPhoneNumberValidation = new SouthAfricanPhoneNumberValidation(phoneNumber, landphonenumberprovince);
    const _phoneNumber = phoneNumber.toString();
    this.isValid = () => {
        let expectedCode = `0${_phoneNumber.substring(0, 1)}`;
        const matchFound = landphonenumberprovince.find(x => x.name === province && expectedCode.startsWith(x.code));
        if (matchFound && _southAfricanPhoneNumberValidation.isValid()){
            return true;
        }
        return false;
    }
};