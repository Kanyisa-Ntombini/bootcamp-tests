describe('findItemsOver: this test' , function(){
    it('should return a list of all products with quantities over a certain amount' , function(){
        assert.deepEqual(
            [ {
                name: "bananas",
                qty: 27
              }],
        findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ], 25));
    });

});