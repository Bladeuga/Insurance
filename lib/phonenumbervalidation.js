module.exports = function PhoneNumberValidation(phoneNumber) {
    const _phoneNumber = phoneNumber.toString();
    this.isValid = () => {
        let phoneNumberWithoutCountryCode = _phoneNumber.replace("+27","");
        if (phoneNumberWithoutCountryCode.startsWith("0")){
            phoneNumberWithoutCountryCode = phoneNumberWithoutCountryCode.substring(1,phoneNumberWithoutCountryCode.length);
        }
        if (phoneNumberWithoutCountryCode.length === 9 ){
            return true;
        }
        return false;
    }
};