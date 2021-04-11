function yearsAgo (suppliedYr) {
  if (isNaN(suppliedYr)) {
    return "Please supply a number";
  }
  else if (suppliedYr < 0 || isNaN(suppliedYr)) {
    return "Please supply a positive number";
  }
  else {
  	return (2021 - suppliedYr);
  }
}