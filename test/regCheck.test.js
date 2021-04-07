describe('regCheck: This test' , 
    function() {
        it ('should say if this car is from some province' , 
            function () {
                assert.deepEqual(true, regCheck("CA239785", "L"));
            }
        );

    }
);