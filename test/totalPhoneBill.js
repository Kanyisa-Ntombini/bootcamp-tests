function totalPhoneBill (phoneRecord) {
	if ((typeof phoneRecord) === 'string') {
		var phoneRecordList = phoneRecord.split(',');
		var cost = 0;

		for (var i = 0; i < phoneRecordList.length; i++) {
			var item = phoneRecordList[i].trim();

			if (item === 'call') {
			  cost += 2.75;
			}
			else if (item === 'sms') {
			  cost += 0.65;
			}
		 }
		 return 'R' + cost.toFixed(2);
	} 
	else {
		return "Please enter a string";
	}
}