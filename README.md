# Express Todo API

This project is a simple Todo API built using Express.js. It supports basic CRUD operations on a set of todo items stored in a `db.json` file.

## Features

- Get all todos
- Add a new todo
- Update the status of todos with even IDs
- Delete all todos with a status of `true`

## Setup Guidelines and Instructions

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory:
   ```bash
   cd express-todo-api

### API Endpoints

Get All Todos

* Endpoint: GET /todos

Description: Retrieves all todos from the database.
Add a New Todo

* Endpoint: POST /todos

Description: Adds a new todo to the database.
Body:
`{
  "id": 4,
  "task": "New Task",
  "status": false
}`
Update Status of Todos with Even IDs.

* Endpoint: PATCH /todos/update-even

Description: Updates the status of todos with even IDs from false to true.
Delete Todos with Status true.

* Endpoint: DELETE /todos/delete-completed

Description: Deletes all todos with a status of true.

-Project Structure:

`express-todo-api/
│
├── db.json           # Database file containing todo data
├── package.json      # Node.js project file
├── package-lock.json # Node.js lock file
├── server.js         # Main server file
└── README.md         # Readme file`

#### Dependencies

* express: Fast, unopinionated, minimalist web framework for Node.js
* nodemon: Simple monitor script for use during development of a Node.js app

#### Development

- To contribute to this project, follow these steps:

* Fork the repository.
* Create a new branch (git checkout -b feature-branch).
* Make your changes.
* Commit your changes (git commit -am 'Add new feature').
* Push to the branch (git push origin feature-branch).
* Create a new Pull Request.

#### License

This project is licensed under the MIT License - see the LICENSE file for details.


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## Credits

This project was created by [K MONIKA]. You can find me on [https://github.com/KMONIKA26].

