function isFromBellville (regNum) {
  let trimmed = regNum.trim();
  return trimmed.startsWith ("CY");
}