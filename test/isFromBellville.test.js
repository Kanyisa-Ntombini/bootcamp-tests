describe('The isFromBellville function' , 
    function() {
        it ('should return true for CY 298-123' , 
            function () {
                assert.deepEqual(true, isFromBellville("CY 298-123"));
            }
        );
        it ('should return false for CJ 298-123' , 
            function () {
                assert.deepEqual(false, isFromBellville("CJ 298-123"));
            }
        );
        it ('should return false for CJ 298-123' , 
            function () {
                assert.deepEqual(false, isFromBellville("   CJ 298-123"));
            }
        );
    }
);