describe('The isFromBellville function',
    function () {
        it('should return true for CY 298-123',
            function () {
                assert.deepEqual(true, isFromBellville("CY 298-123"), 'must start with "CY"');
            }
        );
        it('should return false for CJ 298-123',
            function () {
                assert.deepEqual(false, isFromBellville("CJ 298-123"), 'must start with "CY"');
            }
        );
        it('should return false for CJ 298-123',
            function () {
                assert.deepEqual(false, isFromBellville("   CJ 298-123"), 'must start with "CY"');
            }
        );
        it('should return false for CY 298-123',
            function () {
                assert.deepEqual(true, isFromBellville("   CY 298-123"), 'must start with "CY"');
            }
        );
        it('should return false for ","',
            function () {
                assert.deepEqual(false, isFromBellville(","), 'must start with "CY"');
            }
        );
        it('should return false for CY ""',
            function () {
                assert.deepEqual(false, isFromBellville(""), 'must start with "CY"');
            }
        );

        it('should return "Please enter a string" for 544',
            function () {
                assert.deepEqual("Please enter a string", isFromBellville(544), 'must start with "CY"');
            }
        );
    }
);