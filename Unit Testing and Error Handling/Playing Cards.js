function createCard(face, suit){
        let validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        //let validSuits = ['S', 'H', 'D', 'C'];

        if(validFaces.indexOf(face) == -1){
            throw new Error('Invalid face!');
        } 

        let card = {
            face,
            suit,
            toString: () => {
               
               let convSuit = '';
               card.suit == 'S' ? convSuit = '\u2660'
               : card.suit == 'H' ? convSuit = '\u2665'
               : card.suit == 'D' ? convSuit = '\u2666'
               : card.suit == 'C' ? convSuit = '\u2663'
               : undefined;
                
               
                return `${card.face}${convSuit}`;
            }
        };

        return card;
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());
//console.log(createCard('1', 'S').toString());
