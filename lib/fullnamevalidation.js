module.exports = function FullNameValidation(firstNames, surnames, title){
    this.isTooLong = () => {
        if ((firstNames + surnames).length > 100){
            return true;
        }else{
            return false;
        }
     }
     this.getInitials = () => {
        return firstNames.split(' ').map((name) => name[0]).join(". ") + ".";
     }
     this.isTitleValid = () => {
        if (title === "Mr." || title === "Miss" || title === "Dr."|| title === "Mrs."){
            return true;
        }else{
            return false;
        }
        
     }
}