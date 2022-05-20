# Memory Game
Learning challenge

### Learning Objectives
***
- Change things in the DOM (canvas = cheating)
- Array manipulation

### The Mission
***
We want to recreate the game `memory`. It is a game where you have a bunch of cards. Each card contains an image.Of each image there are exactly two cards. The cards are placed in a random order. You get to turn them around. If you turned around two cards they either turn back so you can't see their image if they did not match. And if they did match they stay image face visible.

### Must-have features
***
- [ ] Clicking cards turns them around
- [ ] Randomly position the cards
- [ ] README, but that shouldn't even have to be said
- [ ] Explanation on the page itself

### Nice-to-have features
***
- Make it playable by keyboard
- Let a user define custom image urls
- Make it pleasing to look at
- Multiplayer (local)

### Setting up the game
***
In this challenge, we will be looking at creating a grid of cards, that can be flipped and matched. If a match is found, the cards stay flipped, if not, they will turn back.
The game does not stop until all cards are flipped.

#### HTML
Our HTML provides the basic structure of the game. So it's the very first step for this project.
I'm making use of some basic HTML tags like div, h1, etc.

I'm going to make use of some bootstrap buttons and classes to keep the designing part simple.

#### CSS
Next up our CSS.
First off we need a .hide class, this is to hide all the images we are going to use. For this we can use a simple CSS property 'visibility: hidden'.
We also need to show the images once they are clicked and also once they match with each other they need to stay visible.
For this we can make a class .imgShow and .match, they will override the hidden property and change it to visible with !important, this way they will always override.


#### JavaScript

