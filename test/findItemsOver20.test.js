describe('findItemsOver20: this test' , function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('should return a list of all products with quantities over 20' , function(){
        var expectedResult = [{
            name: "pears",
            qty: 37
          }, {
            name: "bananas",
            qty: 27
          }];
        assert.deepEqual(expectedResult, findItemsOver20(itemList));
    });

});

//EDIT IT