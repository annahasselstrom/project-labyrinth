# Project Labyrinth
This is a pair-programming project together with Nathalie Nordström. We have build a game which allows a user to navigate a maze, in the form of a text-based adventure, provided by a backend.

We have used a specified API to build a frontend which gives the user control over what to do next. Our focus was to use thunks and redux to build the communication with the backend.  

## View it live 👀

https://unruffled-elion-e19f6e.netlify.app/ 

## The problem

Two endpoints: a url that starts the game off and which we only ask for once, using a POST request. The second endpoint handles the actions the user chooses. We do a POST request to this endpoint every time the user makes an action. 

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## Learnings 

- How to make API calls around Redux using thunks
- How to structure your redux store to suit your data
- To send JSON in the body of a request

1. Try starting the game with Postman
2. Get the game started in your code using fetch
3. Display the description and actions from the response
4. Allow the user/player to select an action
5. Perform a POST request based on the action selected
6. Handle the response from the `POST /action` to update the game state

This project's backend is designed so that there is some delay until the request returns from the server.  Using thunks is a good way of making sure that the user doesn't do another action until the response is received from the server.

- Your page should be responsive.
- Use redux to store the current state of the game
- Focus on making the UX of your app good. Handle the response delay
- Use thunks to wrap your API calls (but you don't have to if you don't want to).

Use redux to store a history of what the player has done

1. he deployed project so that the viewer can click around and see what it's all about.
