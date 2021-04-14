function findItemsOver (itemList, threshold) {
    var resultsList = [];
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      var amount = item.qty;
      if (amount > threshold) {
        resultsList.push(item);
      }
    }
    return resultsList;
  }