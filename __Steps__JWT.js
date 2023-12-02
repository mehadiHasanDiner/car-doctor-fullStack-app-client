/**
 *
 * JWT purpose: secure your API
 *
 * -----------------------------------
 * Create a new JWT token
 * -----------------------------------
 * Client side:
 * -----------------------------------
 * 1. After user login, send user basic info to create a new JWT token.
 * 2. In the server side: install npm i jsonwebtoken.
 * 3. import jsonwebtoken
 * 4. jwt.sign(user, process.env.ACCESS_TOKEN_SECRET),{expr}
 *  jwt.sign(payload, secret, {expiresIn})
 * 5. return token to the client side
 *
 * 6. after receiving the token store it either httponly cookies or local storage(second best solution)
 *
 * 7. use a general space onAuthStateChange > AuthProvider
 *
 *
 * --------------------------------
 * SEND TOKEN TO THE SERVER
 * --------------------------------
 * for sensitive api call() send a authorization headers {authorization: 'Bearer token'}
 *
 * --------------------------------
 * verify the token
 * --------------------------------
 * 1. create a function called verifyJWT
 * 2. this function will have three params: req, res, next.
 * 3. first check whether the authorization headers exists
 * 4. if not send 401
 * 5. get the token of the authorization header
 * 6. call jwt.verify(token, secret, (err, decoded))
 * 7. if err => send 401
 * 8. set decoded to to the req object so we can we can retrieve it later
 * 9. call the next() to go to the next function
 *
 *
 * ------------------------------------
 * 1. check wether toke  has the email that matches with the request email.
 * */
