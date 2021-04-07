describe ('greet: This test',
    function () {
        it ('should say "Hello, Kanyisa"', 
            function () {
                //assert.equal(greet("Kanyisa"));
                assert.deepEqual("Hello, Kanyisa", greet("Jack"));
            }
        );
    }

);