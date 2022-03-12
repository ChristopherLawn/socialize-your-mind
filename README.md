# Social Minds Think Alike: Back-End

## Description
A fully built back-end structure that serves as a base for creating a social networking site! Social Minds Think Alike (SMTA) provides the built-in functionality to create, update, and delete users as well as enabling users to add each other as friends, share and delete thoughts, and share reactions to other users' thoughts. Use SMTA as the foundation to build your social networking site!

## **Table of Contents**
* [Programs](#programs)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [License](#license)
* [Questions](#questions)

## **Programs**
* Express
* JavaScript
* MongoDB
* Mongoose
* Node.js
* NoSQL

## **Installation**
1. In order to run the application, download & install [Node.js](https://nodejs.org/en/download/) on your local device.  ***Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.***
2. After installing Node, clone the [Social Minds Think Alike: Back-End repo](https://github.com/ChristopherLawn/socialize-your-mind) to a project folder on your local device.
3. Open Bash and navigate to the root directory of the project folder.
4. Install all required dependencies for the project by entering the command:
    * `npm install`
    * `npm install express`
    * `npm install mongoose`

## **Usage**
1. Before using the app, check the connection settings in the `connection.js` file - located in the `config` folder
2. To initiate the program and start the server in bash and enter the command:
    * `npm start`
3. Use Insomnia to test all CRUD routes for users, thoughts, and reactions:
    * User routes
        * Create a new user: POST /api/users
        * View all users: GET /api/users
        * View a single user based on their ID: GET /api/users/:id
        * Update a single user based on their ID: PUT /api/users/:id
        * Delete a single user based on their ID: DELETE /api/users/:id
        (*NOTE: when you delete a user, it also deletes all of the user's thoughts!*)
        * Add a friend to a user's friends list: PUT /api/users/:userId/friends/:friendId
        * Delete a friend from a user's friends list: DELETE /api/users/:userId/friends/:friendId

    * Thought routes
        * Create a new thought: POST /api/thoughts
        * View all thoughts: GET /api/thoughts
        * View a single thought based on its ID: GET /api/thoughts/:thoughtId
        * Update a single thought based on its ID: PUT /api/thoughts/:thoughtId
        * Delete a single thought based on its ID: DELETE /api/thoughts/:thoughtId

    * Reaction routes
        * Add a reaction to a specific thought: PUT /api/thoughts/:thoughtId/reactions
        * Delete a reaction based on its ID: DELETE /api/thoughts/:thoughtId/reactions/:reactionId

4. Enter `Ctrl`+`c` in bash to exit out of the server
5. Use SMTA as the foundation for your back-end then build your front-end and deploy your site!
6. Click the link below to watch the "Social Minds Think Alike: Back-End Demo" video to see the CRUD routes for users, thoughts, and reactions in action!

## **Demo**
['Social Minds Think Alike: Back-End' Demo Using Insomnia](***link***)

## **License**
The project is distributed under the [Creative Commons License](https://creativecommons.org/publicdomain/zero/1.0/)

## **Questions**
Please contact me directly with any additional questions:
* [GitHub](https://github.com/ChristopherLawn)
* [Email](mailto:christopher.d.lawn@gmail.com)