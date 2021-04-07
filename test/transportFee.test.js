describe('transportFee: this test' , function(){
    it('should calculate the transport fee for each shift' , function(){
        assert.deepEqual("R20", transportFee("night"));
    });

});