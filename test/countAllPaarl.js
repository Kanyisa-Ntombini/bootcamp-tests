function countAllPaarl (regNumString) {
	if ((typeof regNumString) === 'string') {
		var regNumList = regNumString.split(',');
		 var count = 0;

		 for (var i = 0; i < regNumList.length; i++) {
			var item = regNumList[i].trim();

			if (item.startsWith('CJ')) {
			  count ++;
			}
		 }
		 return count;
	}
	else {
		return 'Please supply a string';
	}
}
