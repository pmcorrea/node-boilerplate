# Express Boilerplate!
This is a boilerplate project used for starting new projects!

## Remove git histroy
`rm -rf .git && git init`
`echo "node_modules" >> .gitignore`
`echo ".env" >> .gitignore`
`echo ".DS_Store" >> .gitignore;`

## Install Dependencies
`npm install`
`touch .env`
`echo "NODE_ENV=development" > .env`
`echo "API_TOKEN=someAPIToken" >> .env`

# Edit `package.json`
Edit the contents of the `package.json` to update "name", "scripts" & "globals"

"scripts": {
   "start": "node src/server_listen.js",
   "dev": "nodemon src/server_listen.js",
   "test": "mocha --require test/setup.js",
   "predeploy": "npm audit",
   "deploy": "git push heroku master"
}

"globals": {
  "supertest": true,
  "expect": true
}

## Scripts
Start the application `npm start`
Start nodemon for the application `npm run dev`
Run the tests `npm test`

## Deploying
# Ensure project version of node and engine in `package.json`
    "engines": {
            "node": "12.6.0"
        }

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch. 
`heroku open`
`predeploy` ("npm audit")
`npm test`
`deploy` ("git push heroku master")