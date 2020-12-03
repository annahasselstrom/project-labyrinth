# Project Labyrinth
This is a pair-programming project together with Nathalie Nordström. We have build a game which allows a user to navigate a maze, in the form of a text-based adventure, provided by a backend.

We have used a specified API to build a frontend which gives the user control over what to do next. Our focus was to use thunks and redux to build the communication with the backend.  

## View it live 👀

https://unruffled-elion-e19f6e.netlify.app/ 

## The project

In this project we worked with an API with two endpoints: one url started the game off and this one we only asked for once, using a POST request. The second endpoint handled the actions the user chose to perform. We performed POST requests using this url every time the user made an action. 

## Workflow

- Tried to visualize the end result 
- Investigated the api endpoints in Postman
- Got the game started in our browser without any connection yet to the Redux store
- Created store and slice with reducers 
- Connected the API responses to the Redux store using thunks with the fetches
- By using thunks we can manage the asynchronousity and prevent a user from performing an new action before the first response is received from the server and updated in Redux store.
- Created components responsible for starting the game and for playing the game
- Displayed the actions and instructions from the responses
- Updated the gamestate on each user action
- Added styling using styled components

## Features

- The page is responsive - we use media queries for this
- We use redux to store the current state of the game
- We have a loading feature to improve UX if the response takes some time. 
- We use thunks to wrap our API calls 
- We use styled components to style our page

## Learnings 

- How to make API calls around Redux using thunks
- How to structure a redux store to suit the data available
- To send JSON in the body of a request

1. 

This project's backend is designed so that there is some delay until the request returns from the server.  Using thunks is a good way of making sure that the user doesn't do another action until the response is received from the server.

-

Use redux to store a history of what the player has done

1. he deployed project so that the viewer can click around and see what it's all about.

## Had we have had more time..
We would have liked to make the buttons re-usable and also understand localStorage better and how to implement it. Perhaps also structure the styling in separate files.
