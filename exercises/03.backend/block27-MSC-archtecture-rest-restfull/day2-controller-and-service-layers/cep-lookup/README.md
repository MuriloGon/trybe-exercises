
# CEP Lookup - Exercise Project

The project intended to apply the knowledge about MSC (Model-Service-Controller) on building a Rest API.

## Tools Used
* Node.js
* Express
* Mysql
* Joi

## Installation

Install cep-lookup with npm

```bash
  cd cep-lookup
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST` -> Mysql host

`DB_USER` -> Mysql user

`DB_PASS` -> Mysql password

`DB_NAME` -> Mysql database name

  
## Documentation

`GET` `/ping`

`GET` `/cep/:cep`

`POST` `/cep`