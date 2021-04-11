function countAllFromTown (regNumString, location) {
  var regNumType = typeof regNumString;
var locationType = typeof location;

if (regNumType === 'string' && locationType === 'string'){
  var regNumList = regNumString.split(',');
    var count = 0;
    
    for (var i = 0; i < regNumList.length; i++) {
      var item = regNumList[i].trim();
      var firstLetters = item.substr(0, 2);
      
      if (firstLetters == location) {
        count ++;
      }
    }
    return count;
}
else {
  return "Please supply a string for the registration numbers and location number";
}
}