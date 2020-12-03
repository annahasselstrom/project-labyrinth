# Project Labyrinth
This is a pair-programming project together with Nathalie Nordström. We have built a game which allows a user to navigate a maze, in the form of a text-based adventure, provided by a backend.

We have used a specified API to build a frontend which gives the user control over what to do next. Our focus was to use thunks and redux to build the communication with the backend. 
## View it live 👀

https://unruffled-elion-e19f6e.netlify.app/ 

## The project

In this project we worked with an API with two endpoints: one url started the game and this one we only asked for once, using a POST request. The second endpoint handled the actions the user chose to perform. The response depended on the action made. We performed POST requests using this url every time the user made an action. Redux was used to store and manage state of game.

## Workflow

- Tried to visualize the end result 
- Investigated the api endpoints in Postman
- Got the game started in our browser without any connection yet to the Redux store
- Created store and slice with reducers 
- Connected the API responses to the Redux store using thunks with the fetches (by using thunks we can manage the asynchronousity and prevent a user from performing an new action before the first response is received from the server and updated in Redux store).
- Created components responsible for starting the game and for playing the game
- Displayed the actions and instructions from the responses
- Updated the gamestate on each user action
- Added styling using styled components

## Features

- The page is responsive - we use media queries for this
- Redux is used to store the current state of the game
- We have a loading feature to improve UX if the response takes some time
- We wrap our API calls in thunks 
- We use styled components to style our page
- Redux store is also used to store the history of player action - displayed in a back-button

## Learnings 

- How to make API calls around Redux using thunks
- How to structure a redux store to suit the data available
- To send JSON in the body of a request

## Had we have had more time..

We would have liked to make the buttons re-usable and also understand localStorage better and how to implement it. Perhaps also structure the styling in separate files.
