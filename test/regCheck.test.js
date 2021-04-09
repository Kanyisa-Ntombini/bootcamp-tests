describe('The regCheck function' , 
    function() {
        it ('should return true for "CA 276-867" and "CA"' , 
            function () {
                assert.deepEqual(true, regCheck("CA 276-867", "CA"));
            }
        );
        it ('should return false for "CA 276-867" and "L"' , 
            function () {
                assert.deepEqual(false, regCheck("CA 276-867", "L"));
            }
        );
        it ('should return false for "465768746" and "EC"' , 
            function () {
                assert.deepEqual(false, regCheck("465768746", "EC"));
            }
        );
        it ('should return false for "FHGUTUGUF" and "CY"' , 
            function () {
                assert.deepEqual(false, regCheck("FHGUTUGUF", "CY"));
            }
        );
        it ('should return false for "CY-124-345" and "CY"' , 
            function () {
                assert.deepEqual(true, regCheck("CY-124-345", "CY"));
            }
        );
    }
);