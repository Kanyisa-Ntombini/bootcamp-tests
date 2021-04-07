function mostProfitableDepartment (salesData) {
	var newSalesData = {};
  
  for (var i = 0; i < salesData.length; i++) {
  	var item = salesData[i];
    var dept = item.department;
    var sales = item.sales;
    
    if (newSalesData[dept] === undefined) {
    	newSalesData[dept] = sales;
    }
    else {
    	newSalesData[dept] += sales;
    }
  }
  
  var compare = 0;
  var profitableDept = '';
  
  for (var item in newSalesData) {
  	var sales = newSalesData[item];
  	if (sales > compare) {
    	compare = sales;
      profitableDept = item;
    }
  }
  
  return profitableDept;
}