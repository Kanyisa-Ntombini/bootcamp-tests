describe('countAllFromTown: this test' , function(){
    it('should count how many cars are from a specific town' , function(){

        assert.deepEqual(4,countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341'","CJ"));
    });

});