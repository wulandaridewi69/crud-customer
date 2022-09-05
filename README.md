# Customer App

This application describes the monitoring customers and can do CRUD.

The challenge there is user id doesn't work when consuming API for its page i.e custumer list, create data customer, and update data customer.

## URL

A RESTful API usinghttps://mitramas-test.herokuapp.com/ documentation with REACT App.

```bash
Localhost : http://localhost:3000/
```
## How To Run

1. Clone this repo
```bash
git@github.com:wulandaridewi69/crud-customer.git
```

2. Before run this project, do this in your terminal :
```bash
cd my-app 
nmp i
npm start
```

## Endpoint Hilight

For users with Pro API Key, please use this root URL to make API request: https://mitramas-test.herokuapp.com/

##### Login [ / ]
`POST` auth/login

- API fetch : 
```
https://mitramas-test.herokuapp.com/auth/login
```
- Response :
```
{
  "access_token": token,
    "token_type": "bearer",
    "expires_in": 86400
}
```
##### Customer list [ /customers]
`GET` customer

- API fetch : 
```
https://mitramas-test.herokuapp.com/customers
```
- Response :
```
status : 401 - Unauthorized.
```
##### Create data [ /customer]
`POST` customer

- API fetch : 
```
https://mitramas-test.herokuapp.com/customers
```
- Response :
```
status : 401 - Unauthorized.
```

##### Update data [ /customer/{id}]
`put` customer/{id}

- API fetch : 
```
https://mitramas-test.herokuapp.com/customers
```
- Response :
```
status : 401 - Unauthorized.
```

## Build With:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

This is a [React.js](https://reactjs.org/) project bootstrapped with [`my-app`](https://github.com/vercel/next.js/tree/canary/packages/my-app).
