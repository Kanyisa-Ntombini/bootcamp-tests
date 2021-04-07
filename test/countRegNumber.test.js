describe('countRegNumber: this test' , 
    function(){
        it('counts the registration numbers' , 
            function () {
                assert.deepEqual(4, countRegNumber('CA 182736,CY 523519,CJ 812328'));
            }
        );

    }
);