module.exports = function Contact(){
    this.validateEmailAddress = (emailAddress) => {
        if (emailAddress.indexOf('@') > -1){
            return true;
        }else{
            return false;
        }
    }
}