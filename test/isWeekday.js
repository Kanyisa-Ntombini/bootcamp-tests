describe('isWeekday: this test' , function(){
    it('should indicate if a day is a weekday' , function(){
        assert.deepEqual(true, isWeekday("Saturday"));
    });
});