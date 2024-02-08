    const cardsCatalog = [
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
        },
        {
            name: 'oct',
            image: 'images/oct.png'
        },
        {
            name: 'oct',
            image: 'images/oct.png'
        },
        {
            name: 'sun',
            image: 'images/sun.png'
        },
        {
            name: 'sun',
            image: 'images/sun.png'
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
            name: 'frog',
            image: 'images/frog.png'
        },
        {
            name: 'frog',
            image: 'images/frog.png'
        }
    ]
    //here define a randomized function to show different pictures
    //in different places on the gameboard
    cardsCatalog.sort(() => 0.5 - Math.random());
    // select the div has class = picsGrid
    const grid = document.querySelector('.picsGrid');
    //here is to track how many times players clicked on the board
    //about the worng guesses
    const wrongGuessHolder = document.querySelector('.wrongGuessHolder');
    //here is to track how many times we win (find the matching pics)
    const matcheingHolder = document.querySelector('.matchingHolder');
    //here is to show the won messages
    const wonMessageHolder = document.querySelector('.wonMessage');

    //here to set a variable to find 5 matching pics, player will win
    const cardsInGame = 5;

    //initial game, wrongGuesses set to 0, win also set 0
    let wrongGuesses = 0;
    let matchingCards = 0;

    //we need to assign the variables wrongGuesses to the html DOM to show times on browser
    wrongGuessHolder.textContent = wrongGuesses;
    //also we assign the won times to the DOM to show numbers
    matcheingHolder.textContent = matchingCards;

    //define the cards that player chose in an empty array
    //also store the id, then know the index of image 
    //define two arrays to track the clicked pic and the pic id. 
    let chosenCards = [];
    let chosenCardsIds = [];

    function initiateBoard() {

        //loop all the images in the cardsCatalog, create a card, put all the images in the card
        //then,append this card to the game bord grid,so that all the images show
        for (let i = 0; i < cardsCatalog.length; i++) {
            let card = document.createElement('img');            
            card.setAttribute('src', 'images/placeholder.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //flip the images function
    function flipCard() {
        if (chosenCards.length != 2) {
            //define a variable called cardid. It has been clicked. so 
            //I can know which card has been clicked
            //here this in an event handler, 
            //this refers to the element that received the click event 
            let cardid = this.getAttribute('data-id');
            //if source of the image is not blank, we should check it
            if (this.getAttribute('src') != 'images/blank.png') {
                //then, push it in an new array called chosencARDS
                //so I know which card has been chosen
                chosenCards.push(cardsCatalog[cardid].name);
                //we also push the cardid to the array, so I can know which 
                //one to flip back to the placeholder or to the blank one
                chosenCardsIds.push(cardid);
                //here to make card flip itself, replace the source, and send 
                //back the original image value
                this.setAttribute('src', cardsCatalog[cardid].image);
                //if the chosen cards are 2, we need to check whether they are 
                //match or not, also, I set timer here. 400 million seconds
                //I also need to define another function called checkForMatch
                if (chosenCards.length == 2) {
                    setTimeout(checkForMatch, 400);
                }
            }
        }
    }

    function checkForMatch(){
        //any click will add up
        wrongGuesses++;
        let cards = document.querySelectorAll('img');
        //compare two images same or not in the array
        let firstCard = chosenCardsIds[0];
        let secondCard = chosenCardsIds[1];
        //if same, found matching. set to blank, count the matching number
        if(chosenCards[0] === chosenCards[1]){
            matchingCards++;
            cards[firstCard].setAttribute('src', 'images/blank.png');
            cards[secondCard].setAttribute('src','images/blank.png');
        
        //if two pics are different, set back to placeholder pics
        }else{
            cards[firstCard].setAttribute('src', 'images/placeholder.png');
            cards[secondCard].setAttribute('src', 'images/placeholder.png');
        }

        //reset arrays for next comparsion 
        chosenCards = [];
        chosenCardsIds = [];
        wrongGuessHolder.textContent = wrongGuesses;
        matcheingHolder.textContent = matchingCards;
        if(matchingCards == cardsInGame){
            wonMessageHolder.innerText = "Well done, you won ! 🎉🎉🎉🎉🎉🎉🎊"
        }

    }

    initiateBoard()

    






