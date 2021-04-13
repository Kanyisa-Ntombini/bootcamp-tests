function isWeekday(wkDay) {
	if ((typeof wkDay) === "string") {
		let trimDay = wkDay.trim();
		let day = trimDay.toUpperCase();
	 
	 	return !(day.startsWith("S")) && day.includes("DAY");
	}
	else {
		return "Please enter a string";
	}
}