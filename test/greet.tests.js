describe ('The greet function',
    function () {
        it ('should say "Hello, Kanyisa"', 
            function () {
                assert.deepEqual("Hello, Kanyisa", greet("Kanyisa"));
            }
        );

        it ('should say "Hello, Kanyisa"', 
            function () {
                assert.deepEqual("Hello, Kanyisa", greet("Jack"));
            }
        );

        it ('should say "Hello, Jack"', 
            function () {
                assert.deepEqual("Hello, Jack", greet(" Jack"));
            }
        );

        it ('should say "Hello, Sandy"', 
            function () {
                assert.deepEqual("Hello, Sandy", greet("Sandy "));
            }
        );
        
    }

);