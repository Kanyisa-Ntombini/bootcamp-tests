function fromWhere (regNum) {
    if ((typeof regNum) === 'string') {
      var startLetters = regNum.substr(0, 2);
    
      switch (startLetters) {
        case 'CY':
          return 'Bellville';
          break;
        case 'CJ':
          return 'Paarl';
          break;
        case 'CA':
          return 'Cape Town';
          break;
        default:
          return 'Some other place!';
          break;
      }
    }
    else {
      return "Please enter a string";
    }  
  }