

const suits = ['Hearts','Diamonds','Spades','Clubs']
const values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King']


class Deck {
  constructor(){
    this.cards = cards
  }
  createDeck(){
    for(let i = 0; i < suits.length;i++){
      for(let j = 0; j < ranks.length; i++){
        this.cards.push(new Card(suits[i],ranks[j],value[j]))
      }
    }
  }
    
  
  shuffle(){
    for(let i = this.cards.length - 1; i > 0; i--){
      const newIndex = Math.floor(Math.random()*(i+1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit,value){
    this.suit = suit
    this.value = value
  }
}


const deck = new Deck()
console.log(deck.cards)





  