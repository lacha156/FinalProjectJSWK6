class Card{
    constructor(rank,suit){
        this.rank = rank
        this.suit = suit
    }
}

class Deck {
    constructor(){
        

        const suits = ['Hearts','Suits','Clubs','Diamonds']
        const ranks = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
        
    }
    createDeck(){
        for(let i = 0; i < suits.length; i++){
            for(let j = 0; i < ranks.length; i++){
                this.cards.push(new Card(suits[i],ranks[i]));
            }
        }
    }
    shuffleDeck(){
        let currentIndex = this.cards.length
        let tempValue, randomIndex
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex)
            tempValue =this.cards[currentIndex]
            this.cards[currentIndex]= this.cards[randomIndex]
            this.cards[randomIndex] = tempValue
        }

    }
}


class Player {
    constructor(name){
        this.name = name
        this.cards = []
        this.battleCard = null
    }
    playCard() {
        this.battleCard = this.cards.shift()
    }
    recieveCard() {
        this.cards.push(Card)
    }
}

class Game {
    constructor(player1,player2,rounds){
        this.player1= new Player(player1)
        this.player2= new Player(player2)
        this.rounds = numberRounds


    }
    compare(card1,card2){
        const rank1 = card1.rank === 1 ? 14 : card1.rank
        const rank2 = card2.rank === 1 ? 14 : card2.rank
    }
    battle(){
        this.player1.playCard()
        this.player2.playCard()
        const result = this.compare(this.player1.battleCard, this.player2.battleCard)
        if (result < 0){
            this.player1.winBattle(this.player2.battleCard)
        }
        
    }
}
