function countRegNumber(regNumbers) {
    let minLength = 2;
    if (regNumbers.length < minLength) {
	 	return 0;
	 }
	 else {
	 	var regArr = regNumbers.split(",");
	 	return regArr.length;
	 }
 }