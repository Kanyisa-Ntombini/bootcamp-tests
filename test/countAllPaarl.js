function countAllPaarl (regNumString) {
    var regNumList = regNumString.split(',');
    var count = 0;
    
    for (var i = 0; i < regNumList.length; i++) {
      var item = regNumList[i].trim();
      var firstLetters = item.substr(0, 2);
      
      if (firstLetters == 'CJ') {
        count ++;
      }
    }
    return count;
  }