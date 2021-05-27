## QRCARD - Server

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

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

