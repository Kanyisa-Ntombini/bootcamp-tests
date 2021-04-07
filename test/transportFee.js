function transportFee (shiftName) {
  
    if (shiftName == 'morning'){
        return 'R' + 20;
    }
    else if (shiftName == 'afternoon'){
        return 'R' + 10;
    }
    else {
        return 'free';
    }
  }