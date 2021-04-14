function findItemsOver20 (itemList) {
    var resultsList = [];
    for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      var amount = item.qty;
      if (amount > 20) {
        resultsList.push(item);
      }
    }
    return resultsList;
  }