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
        cardTwoImage = cardTwo.target.querySelector('.back-view img').src;
        matchCards(cardOneImage, cardTwoImage);
    }
}