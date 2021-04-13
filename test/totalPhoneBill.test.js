describe('The totalPhoneBill function' , function(){
    it('should return R7.45 for "call, sms, call, sms, sms"' , function(){
        assert.deepEqual("R7.45", totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return R8.25 for "call, call, call"' , function(){
        assert.deepEqual("R8.25", totalPhoneBill('call, call, call'));
    });

    it('should return R4.55 for "sms, sms, sms, sms, sms, sms, sms"' , function(){
        assert.deepEqual("R4.55", totalPhoneBill('sms, sms, sms, sms, sms, sms, sms'));
    });

    it('should return R0.00 for "Apples, bananas, pears"' , function(){
        assert.deepEqual("R0.00", totalPhoneBill('Apples, bananas, pears'));
    });

    it('should return "Please enter a string" for 455' , function(){
        assert.deepEqual("Please enter a string", totalPhoneBill(455));
    });
});