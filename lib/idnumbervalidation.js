//https://stackoverflow.com/questions/13344294/south-african-id-number-validate-and-get-age-and-gender
module.exports = function IdNumberValidation(idNumber) {
    const _idNumber = idNumber.toString();
    this.isThirteenDigits = () => {
        if (_idNumber && _idNumber.length === 13){
            return true;
        }
        return false;
    },
    this.isSixDigitsDate = () => {
        const tempDate = new Date(_idNumber.substring(0, 2), _idNumber.substring(2, 4), _idNumber.substring(4, 6));
        let day = tempDate.getDate();
        let month = tempDate.getMonth();
        const year = tempDate.getYear();
        month = month < 10? `0${month}`: month;
        day = day < 10? `0${day}`: day;
        var expectedDate = `${year}${month}${day}`;
        if (_idNumber.startsWith(expectedDate)){
            return true;
        }
        return false;
    },
    this.isMale = () => {
        const gender = _idNumber.substring(6, 10);
        if (gender > 5000){
            return true;
        }
        return false;
    },
    this.isFemale = () => {
        const gender = _idNumber.substring(6, 10);
        if (gender < 5000){
            return true;
        }
        return false;
    },
    this.isSouthAfricanCitizen = () => {
        if (_idNumber.substring(10, 11) == "0"){
            return true;
        }
        return false;
    },
    this.isValidSequence = () => {
         // apply Luhn formula for check-digits
         var tempTotal = 0;
         var checkSum = 0;
         var multiplier = 1;
         for (var i = 0; i < 13; ++i) {
             tempTotal = parseInt(_idNumber.charAt(i)) * multiplier;
             if (tempTotal > 9) {
                 tempTotal = parseInt(tempTotal.toString().charAt(0)) + parseInt(tempTotal.toString().charAt(1));
             }
             checkSum = checkSum + tempTotal;
             multiplier = (multiplier % 2 == 0) ? 1 : 2;
         }
         if ((checkSum % 10) != 0) {
             return false;
         };
         return true;
    }
    this.isValid = () => {
      if(this.isThirteenDigits() && this.isSixDigitsDate() && (this.isMale() || this.isFemale()) && this.isSouthAfricanCitizen() && this.isValidSequence()){
          return true;
      }
    }
}
