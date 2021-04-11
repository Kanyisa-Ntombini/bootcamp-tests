function isFromBellville (regNum) {
  if ((typeof regNum) != 'string') {
    return "Please supply a string";
  }
  else {
    let trimmed = regNum.trim();
    return trimmed.startsWith ('CY');
  }
}