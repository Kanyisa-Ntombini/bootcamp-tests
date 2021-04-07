describe('countAllPaarl: this test' , function(){
    it('checks how many vehicles are from Paarl' , function(){
        assert.deepEqual(4, countAllPaarl("CA89877,CA7689445,CJ909776"));
    });

});