function isWeekday(wkDay) {
	let trimDay = wkDay.trim();
	let day = trimDay.toUpperCase();
	 
	 return !(day.startsWith("S")) && day.includes("DAY");
}