## Project VAJ 2024

### Instructions

## Initial Deployment

To initialize your project for the first time, run the following command in the main folder:


`npm run deploy`

To run the project after first inicialization run:

`npm run start-project`

Everything else is described in **Home screen**. 


PS: prettier is not in `package.json` due to me having it automatically in IDE ( im using ZED ).
And also I am alone in this project so i didnt need it.


# GOOD LUCK



## If anything goes wrong! 
If the project will not start for some particular reason only known to god, try to run all the scripts in main package.js file.

```
 "scripts": {
    "install:be": "cd be && npm install",
    "install:fe": "cd fe/soloplay && npm install",
    "install:main": "npm install",
    "setup": "npm run install:be && npm run install:fe",
    "import:data": "cd be && node scripts/importData.js",
    "prisma-migration": "cd be &&npx prisma migrate dev --name deploy",
    "start:fe": "cd fe/soloplay && npm start",
    "start:be": "cd be && npm start",
    "start-project": "concurrently \"npm run start:be\" \"npm run start:fe\"",
    "deploy": "npm run install:main && npm run setup && npm run prisma-migration && npm run import:data && npm run start-project"
  },
```

Or for some reason the DB wont inicialize, you will need to create .env file and put the adress into DB in `schema.prisma`.

```
datasource db {
  provider = "sqlite"
  url      = env(DATABASE_URL)
}
```

But i hope everxything will run smoothly with just the two of the main scripts and this code wont be needed. 
