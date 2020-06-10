module.exports = function FullNameValidation(firstNames, surnames, title){
    this.isWithinRange = () => {
        if ((firstNames + surnames).length > 100){
            return false;
        }else{
            return true;
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