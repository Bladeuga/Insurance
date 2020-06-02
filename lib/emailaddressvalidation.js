module.exports = function EmailAddressValidation(emailAddress){
    this.hasSecondLevelDomain = () => {
        var emailAddressSplit = emailAddress.split('@');
        if (emailAddressSplit.length === 2){
            emailAddressSplit = emailAddressSplit[1].split('.');
            if (emailAddressSplit.length === 2){
               return true;
            }
        }
    }
    this.hasAtSymbol = () => {
        if (emailAddress.indexOf('@') > -1){
            return true;
        }else{
            return false;
        }
    }
    this.hasTopLevelDomain = () => {
        if (emailAddress.indexOf('.com') > -1){
            return true;
        }else{
            return false;
        }
    }
}