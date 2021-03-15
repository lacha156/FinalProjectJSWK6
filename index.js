class Card {
    constructor(suit,value,rank){
        this.suit = suit;
        this.rank = rank;
        this.value = value;

    }
}



class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
        this.battleCard = null 
        
        
    }
}


class Game {
    constructor(){
        this.players = [];
        

    }
    start(playerOneName,playerTwoName){
        this.players.push(new Player(playerOneName))
        this.players.push(new Player(playerTwoName))
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();
        
        this.players[0].playerCards = d.cards.slice(0,26);
        this.players[1].playerCards = d.cards.slice(26,52);
    }
   battle(){
    let contender1 = this.player1.playCard()
    let contender2 = this.player2.playCard()
   }
}

class Deck {
    constructor(){
        this.cards = [];
    }
    createDeck(){
         let suits = ['Clubs','Diamonds','Hearts','Spades']
         let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; j < ranks.length; j++){
               this.cards.push(new Card(suits[i],ranks[j],values[j])); 
            }
        }
    }
    shuffleDeck(){
       for(let i = this.cards.length -1; i> 0; i--){
           const newIndex = Math.floor(Math.random()*(i+1))
           const oldValue = this.cards[newIndex]
           this.cards[newIndex] = this.cards[i]
           this.cards[i] = oldValue
       }
    }
}

const deck = new Game();
deck.start('luis','jaina');
console.log(deck.players)

    
    









