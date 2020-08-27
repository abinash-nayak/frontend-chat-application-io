This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a real time chat application built with socket.io & node.js in the backend and with React in the frontend.

Join virtual chat rooms and share messages among other members of the room. Simply type in your name/nick-name/preferred-name along with the room name you want to join to get access to the room and you are good to go. If you want to create a room simply follow the same steps and if a room is not present it will create a new room with the name specified and then share the same across other members whom you want to join the same room.

This chat applications support the following features :

0 : This app is responsive with desktop, tablet & mobile compatibility.<br />
1 : Support emojis. Simple type in emoji referencing text like :) and that will be converted to emoji in the chat.<br />
2 : 2 persons with same name wont be allowed to enter the same room. You will get a prompt for the same.<br />
3 : In desktop view you will be able to see all the active members of the room.<br />
4 : Notification message every time someone new enter the room or if someone leave the room.<br />
5 : Simple & Elegant User Interface.

Both the backend code base and the forntend code base is hosted in Heroku.

Catch the live action : https://chat-application-socket-io.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
