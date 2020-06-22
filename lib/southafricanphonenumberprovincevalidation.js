const SouthAfricanPhoneNumberValidation = require("../lib/southafricanphonenumbervalidation.js");
module.exports = function SouthAfricanPhoneNumberProvinceValidation(phoneNumber, province) {
    const _southAfricanPhoneNumberValidation = new SouthAfricanPhoneNumberValidation(phoneNumber);
    const _phoneNumberRanges = [{ province: "Durban", code: "31" } ,{ province: "Cape Town", code: "21" }];
    const _phoneNumber = phoneNumber.toString();
    this.isValid = () => {
        const matchFound = _phoneNumberRanges.find(x => x.province === province && _phoneNumber.startsWith(x.code));
        if (matchFound && _southAfricanPhoneNumberValidation.isValid()){
            return true;
        }
        return false;
    }
};