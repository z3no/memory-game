const cards = document.querySelectorAll('.card');

let match = 0;
let cardOne, cardTwo;
let disableDeck = false;

cards.forEach(card => {
    card.addEventListener('click', flipCard);
})

function flipCard(clickedCard) {
    if(cardOne !== clickedCard && !disableDeck){
        clickedCard.target.classList.add('flip');
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImage = cardOne.target.querySelector('.back-view img').src;
        let cardTwoImage = cardTwo.target.querySelector('.back-view img').src;
        matchCards(cardOneImage, cardTwoImage);
    }
}

function matchCards(image1, image2) {
    if (image1 === image2) {
        match++;
        cardOne.target.removeEventListener('click', flipCard);
        cardTwo.target.removeEventListener('click', flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.target.classList.add('shake');
        cardTwo.target.classList.add('shake');
    }, 400);

    setTimeout(() => {
        cardOne.target.classList.remove('shake', 'flip');
        cardTwo.target.classList.remove('shake', 'flip');
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}