describe ('The greet function',
    function () {
        it ('should say "Hello, Kanyisa" for "Kanyisa"', 
            function () {
                assert.deepEqual("Hello, Kanyisa", greet("Kanyisa"));
            }
        );

        it ('should say "Hello, Autumn" for "     Autumn    "', 
            function () {
                assert.deepEqual("Hello, Autumn", greet("    Autumn     "));
            }
        );

        it ('should say "Hello, Jack" for " Jack"', 
            function () {
                assert.deepEqual("Hello, Jack", greet(" Jack"));
            }
        );

        it ('should say "Hello, Sandy" for "Sandy "', 
            function () {
                assert.deepEqual("Hello, Sandy", greet("Sandy "));
            }
        );

        it ('should say "Please supply a string"', 
            function () {
                assert.deepEqual("Please supply a string", greet(744));
            }
        );
        
    }

);