function findItemsOver20 (itemsList) {
    var resultsList = [];
    for (var i = 0; i < itemsList.length; i++) {
      var item = itemsList[i];
      var amount = item.qty;
      if (amount > 20) {
        resultsList.push(item);
      }
    }
    return resultsList;
  }