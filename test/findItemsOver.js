function findItemsOver (itemsList, threshold) {
    var resultsList = [];
    for (var i = 0; i < itemsList.length; i++) {
      var item = itemsList[i];
      var amount = item.qty;
      if (amount > threshold) {
        resultsList.push(item);
      }
    }
    return resultsList;
  }