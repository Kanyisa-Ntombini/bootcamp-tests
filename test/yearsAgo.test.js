describe('The yearsAgo function' , function(){
    it('should return 27 for 1994' , function(){
        assert.deepEqual(27, yearsAgo(1994));
    });

    it('should return 14 for 2007' , function(){
        assert.deepEqual(14, yearsAgo(2007));
    });

    it('should return "Please enter a number" for "Andile"' , function(){
        assert.deepEqual("Please enter a number", yearsAgo("Andile"));
    });

    it('should return "Please enter a positive number" for -10' , function(){
        assert.deepEqual("Please enter a positive number", yearsAgo(-10));
    });

    it('should return "Please enter a number" for "cake"' , function(){
        assert.deepEqual("Please enter a number", yearsAgo("cake"));
    });
});