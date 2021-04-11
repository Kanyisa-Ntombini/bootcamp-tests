function transportFee (shift) {
    if ((typeof shift) === 'string') {
      let shiftName = shift.trim();
     
     switch (shiftName) {
         case 'morning':
             return 'R' + 20;
             break;
         case 'afternoon':
             return 'R' + 10;
             break;
         case 'nightshift':
             return 'free';
             break;
         default:
             return "Please enter: morning, afternoon or nightshift";	
     }
  }
  else {
      return "Please enter a string";
  }
}