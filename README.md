# React-Coding-Challenge 
## Paloma take home challenge.

- How did you decide on the technical and architectural choices used as part of your solution?
```
I choose to build this project from scratch using react and webpack. Since I really don't have a good idea of how big this project will become in the nearby future, using a barebones architecture will allow us to pivot more easily to a more appropriate tech stack when the time comes to make a switch. TailwindCSS can be used in either occassion with minimal changes to the setup. 

I added in docker to allow our app to run in almost any environment. Jest and React-testing-library for testing. Husky to run tests and lint our project on each commit.

I added TypeScript to check our data types at compile time, this will speed up our application in a production environment since we are not relying so much on prop-time checking during run-time execution.
```
- Are there any improvements you could make to your submission?

```
We could add in a state management library such as xstate, redux, or mobx and fix the apps responsiveness to better fit smaller screen sizes. 

The project is very small at the moment, maybe making it even smaller with something like Preact could be even more beneficial.
```
- What would you do differently if you were allocated more time?
```
Test the code submitted. Setup Husky to test and lint our code on each commit. 
Cleanup unnecessary webpack configurations.
```