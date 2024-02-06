document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        {
            name: 'ambulance',
            image: 'images/ambulance.png'
        },
        {
            name: 'ambulance',
            image: 'images/ambulance.png'
        },
        {
            name: 'bike',
            image: 'images/bike.png'
        },
        {
            name: 'bike',
            image: 'images/bike.png'
        },
        {
            name: 'cow',
            image: 'images/cow.png'
        },
        {
            name: 'cow',
            image: 'images/cow.png'
        },
        {
            name: 'excavator',
            image: 'images/excavator.png'
        },
        {
            name: 'excavator',
            image: 'images/excavator.png'
        },
        {
            name: 'pig',
            image: 'images/pig.png'
        },
        {
            name: 'pig',
            image: 'images/pig.png'
        },
        {
            name: 'robot',
            image: 'images/robot.png'
        },
        {
            name: 'robot',
            image: 'images/robot.png'
        },
        {
            name: 'seahorse',
            image: 'images/seahorse.png'
        },
        {
            name: 'seahorse',
            image: 'images/seahorse.png'
        },
        {
            name: 'starfish',
            image: 'images/starfish.png'
        },
        {
            name: 'starfish',
            image: 'images/starfish.png'
        },
        {
            name: 'strawberry',
            image: 'images/strawberry.png'
        },
        {
            name: 'strawberry',
            image: 'images/strawberry.png'
        }
    ]
    //in the cardlist, the pictures random input function
    cardsList.sort(() => 0.5 - Math.random());
    //we select the div has class = gameGrid
    const grid = document.querySelector('.gameGrid');
    const attemptsHolder = document.querySelector('.attemptsHolder');
    const foundHolder = document.querySelector('.foundHolder');

    const cardsInGame = 10;

    //initial game, attempts set to 0
    let attempts = 0;
    let foundCards = 0;

    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;



    let chosenCards = [];
    let chosenCardsIds = [];


    function initiateBoard() {

        //loop all the images in the cardlist, create a card, put all the images in the card
        //then,append this card to the game bord grid
        for (let i = 0; i < cardsList.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', images / placeholder.png);
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }


    }

    function flipCard() {
        if (chosenCards.length != 2) {
            //we add card id that has been clicked, so we know which card id has been clicked
            let cardid = this.getAttribute('data-id');
            //if source is not blank, we should check it
            if (this.getAttribute('src') != 'images/blank.png') {
                chosenCards.push(cardsList[cardId].name);
                chosenCardsIds.push(cardId);
                this.setAttribute('src', cardsList[cardId].image);
                if (chosenCards.length == 2) {
                    setTimeout(checkForMatch, 400);


                }

            }


        }

    }

    function checkForMatch(){
        attempts++;
        let cards = document.querySelectorAll('img');
        let firstCard = chosenCardsIds[0];
        let secondCard = chosenCardsIds[1];
        if(chosenCards[0] == chosenCards[1]){
            foundCards++;
            cards[firstCard].setAttribute('src', 'images/blank.png');
            cards[secondCard].setAttribute('src', 'images/blank.png');
            
        }else{
            cards[firstCard].setAttribute('src', 'images/placeholder.png');
            cards[secondCard].setAttribute('src', 'images/placeholder.png');
        }

        chosenCards = [];
        chosenCardsIds = [];
        attemptsHolder.textContent = attempts;
        foundHolder.textContent = foundCards;
        if(foundCards == cardsInGame){
            alert('well done, you won !')
        }


    }

    initiateBoard();

})