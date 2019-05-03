/*jshint esversion: 6 */

const rank = ["Ace", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight",
        "Nine", "Ten", "Jack", "Queen", "King"
    ],
    rankChar = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"],
    suit = ["Spades", "Hearts", "Diamonds","Clubs"],
    pokerType = ["Royal FLush","Straight Flush","Four Of A Kind","Full House","Flush","Straight","Three Of Kind","Two Pair","Pair","High Card"]

let deck = [];
let cardImg = [];

let deckCounter = [0,0,0,0,0,0,0,0,0,0];
let runCounter = 0;

let genInter;

const tableContentElm = document.querySelector('#tableContent');
const elapsedElm = document.querySelector('#elapsed');

let startTime = 0,endTime = 0;

const fakeDeck = [ new Card({v:0,r:"Ace",s:"Spades"}),new Card({v:1,r:"King",s:"Spades"}),new Card({v:2,r:"Queen",s:"Spades"}),new Card({v:3,r:"Jack",s:"Spades"}),new Card({v:4,r:"Ten",s:"Spades"})];

function generateDeck(){
    let deck = []; 
    for (let i = 0; i < 5; i++) {
        let cardNum = parseInt((Math.random() * 100) % 52);
        temp = {};
        temp.r = rank[cardNum % 13];
        temp.s = suit[parseInt(cardNum / 13)];
        temp.v = cardNum;
        temp.rv = cardNum % 13;
        temp.sv = parseInt(cardNum / 13)
        deck.push(new Card(temp));
    }
    return deck;
}

function runTest(deck){
    let sortedDeck = deck.sort((a,b)=>{
        return a.rankValue - b.rankValue;
    });
    updateImage(sortedDeck);
    for(var i = 0; i < tester.length; i++){
        if(tester[i](sortedDeck)){
            deckCounter[i] = deckCounter[i] + 1;
            return pokerType[i];
        }
    }
    deckCounter[9] = deckCounter[9] + 1;
}

function updateTableContent(){
    pokerType.map((d,i)=>{
        document.getElementById(`${i}-counter`).innerHTML = deckCounter[i];
        document.getElementById(`${i}-percent`).innerHTML = ""+(deckCounter[i]/runCounter)*100+"%";
    });
    document.getElementById('total-counter').innerHTML = runCounter;
}

function updateImage(deck){
    for(var i =0;i<deck.length;i++){
        document.getElementById(`card-${i}`).innerHTML = cardImg[deck[i].value];
    }
}

function updateTime(){
    elapsedElm.innerHTML = Date.now() - startTime + " ms";
}

function runDeckTest(){
    runTest(generateDeck());
    myChart.update();
    updateTableContent();
    updateTime();
    runCounter++;
}

function start(){
    if(endTime == 0){
        startTime = Date.now();
    }else{
        endTime = 0;
    }
    genInter = setInterval(runDeckTest,1);
    document.querySelector('#stop').removeAttribute("disabled");
    document.querySelector('#start').setAttribute("disabled","disabled");
}

function stop(){
    clearInterval(genInter);
    endTime = Date.now();
    document.querySelector('#start').removeAttribute("disabled");
    document.querySelector('#stop').setAttribute("disabled","disabled");
}