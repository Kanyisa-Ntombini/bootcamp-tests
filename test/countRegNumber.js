function countRegNumber(regNumbers) {
    let minLength = 2;
	 
	 if ((typeof regNumbers) === "string") {
	 	if (regNumbers.length < minLength) {
	 		return 0;
	 	}
		 else {
	 		var regArr = regNumbers.split(",");
	 		return regArr.length;
	 	}
	 }
	 else {
	 	return "Please supply a string";
	 }
 }