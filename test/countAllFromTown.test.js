describe('The function countAllFromTown' , function(){
    it('should return 1 for "CL 124,CY 567,CL 345, CJ 456,CL 341" and "CJ"' , function(){

        assert.deepEqual(1,countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CJ"));
    });

    it('should return 1 for "MP 124,CY 567,MP 345, CJ 456,CL 341" and "MP"' , function(){

        assert.deepEqual(2,countAllFromTown("MP 124,CY 567,CL 345, MP 456,CL 341","MP"));
    });

    it('should return 0 for "" and "CJ"' , function(){

        assert.deepEqual(0,countAllFromTown("","CJ"));
    });

    it('should return 0 for "," and "CJ"' , function(){

        assert.deepEqual(0,countAllFromTown(",","CJ"));
    });

    it('should return "Please enter a string for the registration numbers and location number" for 16 and "MP"' , function(){

        assert.deepEqual("Please enter a string for the registration numbers and location number", countAllFromTown(16,"MP"));
    });

    it('should return "Please enter a string for the registration numbers and location number" for "MP 124,CY 567,MP 345, CJ 456,CL 341" and 555' , function(){

        assert.deepEqual("Please enter a string for the registration numbers and location number", countAllFromTown("MP 124,CY 567,MP 345, CJ 456,CL 341",555));
    });
});