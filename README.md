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

Restarted this project 4 times already, had some difficulties with how to start on this project. A lot off information I found online, I could understand but not really know how to start with, because there were also pieces of javascript they would use that we haven't seen yet and I didn't understand.
So I wanted to restart looking first at how I could build everything in html and css and then later on use not to much JavaScript to make it all come together.

#### HTML
Our HTML provides the basic structure of the game. So it's the very first step for this project.
I'm going to make use of some bootstrap buttons and classes to keep the designing part simple.

First I'm trying to make the cards by working with an unordered list in HTML. I want to start it off simple and how it looks logical from my point of view, as a beginning developer.
Now I have 12 cards in total, everytime with a <div> that has a front view and a <div> with a back view.

#### CSS
In the CSS I made some basic styling to position the cards in a container. In here they will be centered, the container will be centered in the body.
The most important pieces in the css file are the ones which are meant for the shake animation if your choice is incorrect, and the flip when the cards turn.

INFORMATION:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility

```
.card.shake {
    animation: shake 0.35s ease-in-out;
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(-13px);
    }
    40% {
        transform: translateX(13px);
    }
    60% {
        transform: translateX(-8px);
    }
    80% {
        transform: translateX(8px);
    }
}

.view {
        ...
        transition: transform 0.25s linear;
}
```
#### JavaScript
In JavaScript we have to make sure we have a function that will be able to flip the cards,
a function that checks if the cards are identical so they match and a function that will shuffle all cards at the start but also when you start over.