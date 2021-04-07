describe('totalPhoneBill: this test' , function(){
    it('should calculate the total phone bill' , function(){
        assert.deepEqual("R50", totalPhoneBill('call, sms, call, sms, sms'));
    });

});