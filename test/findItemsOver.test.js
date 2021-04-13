describe('findItemsOver: this test' , function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('should return a list of all products with quantities over a certain amount' , function(){
        var expectedResult = [{
            name: "pears",
            qty: 37
          }, {
            name: "bananas",
            qty: 27
          }]
        assert.deepEqual(expectedResult,findItemsOver(itemList, 25));
    });

    it('should return a list of all products with quantities over a certain amount' , function(){
        var expectedResult = [];
        assert.deepEqual(expectedResult,findItemsOver(itemList, 40));
    });
});

//NEED TO EDIT IT