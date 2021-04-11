describe('The transportFee function' , function(){
    it('should should return "free" for "nightshift"' , function(){
        assert.deepEqual("free", transportFee("nightshift"));
    });

    it('should should return "free" for "  nightshift  "' , function(){
        assert.deepEqual("free", transportFee("  nightshift  "));
    });

    it('should should return "R10" for "afternoon"' , function(){
        assert.deepEqual("R10", transportFee("afternoon"));
    });

    it('should should return "R10" for "afternoon    "' , function(){
        assert.deepEqual("R10", transportFee("afternoon    "));
    });

    it('should should return "R20" for "morning"' , function(){
        assert.deepEqual("R20", transportFee("morning"));
    });

    it('should should return "R20" for "     morning"' , function(){
        assert.deepEqual("R20", transportFee("     morning"));
    });

    it('should should return "Please enter a string" for 111' , function(){
        assert.deepEqual("Please enter a string", transportFee(111));
    });

    it('should should return "Please enter: morning, afternoon or nightshift" for "Eagle"' , function(){
        assert.deepEqual("Please enter: morning, afternoon or nightshift", transportFee("Eagle"));
    });
});