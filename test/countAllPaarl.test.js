describe('The countAllPaarl function' , function(){
    it('should return 1 for "CA89877,CA7689445,CJ909776"' , function(){
        assert.deepEqual(1, countAllPaarl("CA89877,CA7689445,CJ909776"));
    });

    it('should return 3 for "  CJ 898-177, CJ 768-445 , CJ 909-776"' , function(){
        assert.deepEqual(3, countAllPaarl("  CJ 898-177, CJ 768-445 , CJ 909-776"));
    });

    it('should return "Please supply a string" for 23' , function(){
        assert.deepEqual("Please supply a string", countAllPaarl(23));
    });

    it('should return 0 for ""' , function(){
        assert.deepEqual(0, countAllPaarl(""));
    });

    it('should return 0 for ","' , function(){
        assert.deepEqual(0, countAllPaarl(","));
    });
});