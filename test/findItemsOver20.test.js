describe('findItemsOver20: this test' , function(){
    it('should return a list of all products with quantities over 20' , function(){
        assert.deepEqual(
            [{
                name: "pears",
                qty: 37
              }, {
                name: "bananas",
                qty: 27
              }],
        findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
    });

});