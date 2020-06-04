module.exports = function FullNameValidation(fullName){
    this.isTooLong = () => {
        if (fullName.length > 100){
            return true;
        }else{
            return false;
        }
     }
     this.getInitials = () => {
        return fullName;
     }
}