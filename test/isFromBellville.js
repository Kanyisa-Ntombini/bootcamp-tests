function isFromBellville (regNum) {
  if ((typeof regNum) != 'string') {
    return "Please enter a string";
  }
  else {
    let trimmed = regNum.trim();
    return trimmed.startsWith ('CY');
  }
}