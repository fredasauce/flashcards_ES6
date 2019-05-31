// Arrive at site
// Click on start quiz button
// Card will appear with question
// Click on card to flip
// Reveal back of card with description
// Add, edit, and delete card fucntionality

$(document).ready( function() {
  const card = $(".card")
  const newCard = $(".newCard")
  const cardFront = $("#front")
  const cardBack = $("#back")
  

  $(".card").on("click", function() {
    card.toggleClass("is-flipped")
  })

  
  newCard.on("click", function() {
    // allow user to enter a front and a back
    cardFront.append(`What is ${question[1]}`)
  })

  const newCardFunction = () => {
    card.append("<h1>You did it!</h1>")
  }
})