describe('The countRegNumber function' , 
    function(){
        it('should return 3 for "CA 182-736 , CY 523-519, CJ 812-328"' , 
            function () {
                assert.deepEqual(3, countRegNumber('CA 182-736 , CY 523-519, CJ 812-328'));
            }
        );
        it('should return 5 for "BSD 221 EC , 12475 685, CJ 34, 567646, RRREE"' , 
            function () {
                assert.deepEqual(5, countRegNumber('BSD 221 EC , 12475 685, CJ 34, 567646, RRREE'));
            }
        );
        it('should return 0 for ","' , 
            function () {
                assert.deepEqual(0, countRegNumber(","));
            }
        );
        it('should return 0 for ""' , 
            function () {
                assert.deepEqual(0, countRegNumber(""));
            }
        );
        it('should return 0 for "Q"' , 
            function () {
                assert.deepEqual(0, countRegNumber("Q"));
            }
        );

        it('should return "Please supply a string" for 100' , 
            function () {
                assert.deepEqual("Please supply a string", countRegNumber(100));
            }
        );
    }
);