describe('The fromWhere function' , function(){
    it('should return Cape Town for CA 9757584' , function(){
        assert.deepEqual("Cape Town", fromWhere("CA 9757584"));
    });

    it('should return Bellville for CY 9757584' , function(){
        assert.deepEqual("Bellville", fromWhere("CY 9757584"));
    });

    it('should return Paarl for CJ 9757584' , function(){
        assert.deepEqual("Paarl", fromWhere("CJ 9757584"));
    });

    it('should return "Some other place!" for BSD 221 EC' , function(){
        assert.deepEqual("Some other place!", fromWhere("BSD 221 EC"));
    });

    it('should return "Please enter a string" for 234' , function(){
        assert.deepEqual("Please enter a string", fromWhere(234));
    });
});