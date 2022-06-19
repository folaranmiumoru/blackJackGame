let player = {
    name: "Fola",
    chips: 145,
    sayHello: function() {
        console.log("Heisann!")
    }
}


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
 

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.getElementById("sum-el") //let sumEl = document.querySelector("body") also works
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
                   let randomNumber = Math.floor( Math.random() * 13 ) + 1
                   if (randomNumber > 10) {
                    return 10
                } else if (randomNumber === 1) {
                    return 11
                } else {
                    return randomNumber
                }
}

function startGame(){
                      isAlive = true
                      let firstCard = getRandomCard()
                     let secondCard = getRandomCard()
                     cards = [firstCard, secondCard]
                     sum = firstCard + secondCard
                     renderGame()
}
function renderGame() {
    // 2. Display the message in the messageEl using messageEl.textContent
    cardsEl.textContent = "Cards: " 
 // Create a for loop that renders out all the cards instead of just two
    for( i=0; i < cards.length; i++ ){ 
        cardsEl.textContent += cards[i] + " "
    }

    messageEl.textContent = message
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
       // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
         if (isAlive === true && hasBlackJack === false){
         console.log("Drawing a new card from the deck!")
         let thirdCard = getRandomCard()
         sum += thirdCard
         // Push the card to the cards array
         cards.push(thirdCard)
         renderGame()
    }}