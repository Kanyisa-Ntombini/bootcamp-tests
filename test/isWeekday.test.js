describe('The isWeekday function',
  function () {
    it('should return true for Monday',
      function () {
        assert.deepEqual(true, isWeekday("Monday"));
      }
    );

    it('should return true for "    Thursday     "',
      function () {
        assert.deepEqual(true, isWeekday("    Thursday     "));
      }
    );

    it('should return false for Saturday',
      function () {
        assert.deepEqual(false, isWeekday("Saturday"));
      }
    );

    it('should return false for Saturday',
      function () {
        assert.deepEqual(false, isWeekday("Saturday"));
      }
    );

    it('should return false for Something Random',
      function () {
        assert.deepEqual(false, isWeekday("Something Random"));
      }
    );

    it('should return "Please enter a string" for 111',
      function () {
        assert.deepEqual("Please enter a string", isWeekday(111));
      }
    );
  }
);