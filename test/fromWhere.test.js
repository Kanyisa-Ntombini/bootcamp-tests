describe('fromWhere: this test' , function(){
    it('should say which town a car registration no is from' , function(){
        assert.deepEqual("Bellville", fromWhere("CA 9757584"));
    });

});