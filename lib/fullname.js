module.exports = function FullName(firstNames){
     this.getInitials = () => {
        return firstNames.split(' ').map((name) => name[0]).join(". ") + ".";
     }
}