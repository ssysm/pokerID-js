function royalFLush(deck) {
    if (deck[0].rank == "Ace" && (deck[0].suit == deck[1].suit)) {
        if (deck[1].rank == "King" && (deck[1].suit == deck[2].suit)) {
            if (deck[2].rank == "Queen" && (deck[2].suit == deck[3].suit)) {
                if (deck[3].rank == "Jack" && (deck[3].suit == deck[4].suit)) {
                    if (deck[4].rank == "Ten" && (deck[4].suit == deck[3].suit)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function straightFlush(deck) {
    return straight(deck) && flush(deck);
}

function FourOfAKind(deck) {
    for (var i = 0; i < deck.length - 3; i++) {
        if (i < 4) {
            if (deck[i].rank == deck[i + 1].rank && deck[i + 1].rank == deck[i + 2].rank && deck[i + 2].rank == deck[i + 3].rank) {
                return true;
            }
        }
    }
    return false;
}

function fullHouse(deck) {
    if (deck[0].rank == deck[1].rank && deck[1].rank == deck[2].rank) {
        if (deck[3].rank == deck[4].rank) {
            return true;
        }
    } else if (deck[2].rank == deck[3].rank && deck[3].rank == deck[4].rank) {
        if (deck[0].rank == deck[1].rank) {
            return true;
        }
    }
    return false;
}

function flush(deck) {
    for (var i = 0; i < deck.length - 1; i++) {
        if (deck[i].suit !== deck[i + 1].suit) {
            return false;
        }
    }
    return true;
}

function straight(deck) {
    for (var i = 0; i < deck.length - 1; i++) {
        if (deck[i].rankValue + 1 !== deck[i + 1].rankValue) {
            return false;
        }
    }
    return true;
}

function threeOfKind(deck) {
    for (var i = 0; i < deck.length - 2; i++) {
        if (i < 3) {
            if (deck[i].rank == deck[i + 1].rank && deck[i + 1].rank == deck[i + 2].rank) {
                return true;
            }
        }
    }
    return false;
}

function twoPair(deck) {
    for (var i = 0; i < deck.length - 1; i++) {
        if (deck[i].rank == deck[i + 1].rank) {
            for (var j = i +1; j < deck.length - i -1; j++) {
                if (deck[j].rank == deck[j + 1].rank) {
                    return true;
                }
            }
        }
    }
    return false;
}

function pair(deck) {
    for (var i = 0; i < deck.length - 1; i++) {
        if (deck[i].rank == deck[i + 1].rank) {
            return true;
        }
    }
}

const tester = [
    royalFLush,
    straightFlush,
    FourOfAKind,
    fullHouse,
    flush,
    straight,
    threeOfKind,
    twoPair,
    pair
];