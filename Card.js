/*jshint esversion: 6 */

class Card {
    constructor({
        v,
        r,
        s,
        rv,
        sv
    }) {
        this.value = v;
        this.rank = r;
        this.suit = s;

        this.rankValue = rv;
        this.suitValue = sv;
    }

    getValue(){
        return this.value;
    }
}