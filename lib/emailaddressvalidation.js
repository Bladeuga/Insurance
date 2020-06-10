module.exports = function EmailAddressValidation(emailAddress){
    this.isValid = () => {
        var emailAddressSplit = emailAddress.split('@');
        if (emailAddressSplit.length === 2){
            emailAddressSplit = emailAddressSplit[1].split('.');
            if (emailAddressSplit.length === 2){
                if (emailAddressSplit[0].length > 0 && emailAddressSplit[1].length > 0){
                    return true;
                }
            }
        }
        return false;
    }
}