## QRCARD - Server

This repository concerns the server part of the qrcard project.

### Prerequisites

Install all modules
  ```sh
  npm install or yarn
  ```

### Installation

1. Create a postgres database locally
2. Replace DATABASE_URL in the file .env
3. Migrate your database with Prisma
```sh
npx prisma migrate dev
```
4. Push db to Heroku
```sh
npx prisma db push
```
   
### Run the server

```sh
npm start
```

### Commands

1. Add a new user in the database
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Pizzalyon", "adress": "Lyon", "category":"pizza"}' http://localhost:3000/user```
```
2. Run Prisma Studio
```sh
npx prisma studio
```

## Routes utilisation

|Method	|Route	|Description|
|-------|------|-----------|
|GET	| /users | this should respond with a list of all cards.|
|GET	| /users/:id	| this route should display a single card's found on the database.|
|POST	| /user | this route should add a new card on the database.|
