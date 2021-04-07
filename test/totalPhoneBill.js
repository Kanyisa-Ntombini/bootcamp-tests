function totalPhoneBill (phoneRecord) {
    var phoneRecordList = phoneRecord.split(',');
    
    var cost = 0;
    
    for (var i = 0; i < phoneRecordList.length; i++) {
      var item = phoneRecordList[i].trim();
      
      if (item == 'call') {
        cost += 2.75;
      }
      else {
        cost += 0.65;
      }
    }
    return 'R' + cost.toFixed(2);
  }