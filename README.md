# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## App link: https://cars-doctor-fullstack-client.web.app/

## Firebase Custom Domain link: https://car-doctor-full-stack-app-server.vercel.app

## Vercel/Server API: https://car-doctor-full-stack-app-server.vercel.app/

# step of firebase deployment

- firebase init
- give answer or select all options when creating
- npm run build
- firebase deploy
- change the custom domain {"Firebase Custom Domain link: https://car-doctor-full-stack-app-server.vercel.app"} (when it is not working properly)

- JWT purpose: secure your API

- ***
- Create a new JWT token
- ***
- Client side:
- ***
- 1.  After user login, send user basic info to create a new JWT token.
- 2.  In the server side: install npm i jsonwebtoken.
- 3.  import jsonwebtoken
- 4.  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET),{expr}
- jwt.sign(payload, secret, {expiresIn})
- 5.  return token to the client side
-
- 6.  after receiving the token store it either httponly cookies or local storage(second best solution)
-
- 7.  use a general space onAuthStateChange > AuthProvider

- ***
- SEND TOKEN TO THE SERVER
- ***
- for sensitive api call() send a authorization headers {authorization: 'Bearer token'}

- ***
- verify the token
- ***
- 1.  create a function called verifyJWT
- 2.  this function will have three params: req, res, next.
- 3.  first check whether the authorization headers exists
- 4.  if not send 401
- 5.  get the token of the authorization header
- 6.  call jwt.verify(token, secret, (err, decoded))
- 7.  if err => send 401
- 8.  set decoded to to the req object so we can we can retrieve it later
- 9.  call the next() to go to the next function

- ***
- 1.  check wether toke has the email that matches with the request email.
