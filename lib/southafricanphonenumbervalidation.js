module.exports = function SouthAfricanPhoneNumberValidation(phoneNumber, phoneNumberLookups) {
    const _phoneNumber = phoneNumber.toString();
    //const _cellPhoneNumberRanges = ["06","07","08"];
    //const _landPhoneNumberRanges = ["01","02","03","04","05"];
    
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

    this.isCellPhoneNumber = () => {
        let cellPhoneRange = `0${_phoneNumber.substring(0, 1)}`;
        if (phoneNumberLookups.find(x=> x.code === cellPhoneRange)){
            return true;
        }
        return false;
    }
    this.isLandPhoneNumber = () => {
        let landPhoneRange = `0${_phoneNumber.substring(0, 1)}`;
        if (phoneNumberLookups.find(x=> x.code === landPhoneRange)){
            return true;
        }
        return false;
    }
};