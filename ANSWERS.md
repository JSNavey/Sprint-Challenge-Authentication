<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    Middleware - the function that we want to manipulate our data, for example, adding some conditions/restrict to whom can access our data.  Middleware can apply to every route(global) or some specific route (local) that we want.

    Sessions - It is a time set on the server that user has after logging in.

    Bcrypt - uses “hashing” algorithm to produce password encryption.  Hashing is one way function, which means once a password got hashed, the password will become a long random string which seems impossible to find out what the real password is.

    JWT - Json Web Token.  It’s another way to authenticate the data.  Instead of using session and cookies, JWT will make token that user will hold it in local storage and use it when the user want to access the data.

2.  What does bcrypt do in order to prevent attacks?

    As mention above in bcrypt answer, it’s one way process which it’s super hard to rehash the process to get the real password.  However, to make rehashing even harder, if the password is long and mixed with special character in order to prevent “Brute-force” or “rainbow-table” attack.

3.  What are the three parts of the JSON Web Token?

    Header - holds the algorithm and type of token
    Payload - user’s data.  
    Signature - combination of encode header, encode payload and must-have secret to verify user.
