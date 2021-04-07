function fromWhere (regNum) {
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