const bulbasaur = {name: 'bulbasaur', number: 1, type: 'grass'};
const ivysaur = {name: 'ivysaur', number: 2, type: 'grass'};
const venesaur = {name: 'venesaur', number: 3, type: 'grass'};
const charmander = {name: 'charmander', number: 4, type: 'fire'};
const charmeleon = {name: 'charmeleon', number: 5, type: 'fire'};
const charizard = {name: 'charizard', number: 6, type: 'fire'};
const squirtle = {name: 'squirtle', number: 7, type: 'water'};

const pokemon = [bulbasaur, ivysaur, venesaur, charmander, charmeleon, charizard, squirtle];

logOutThings();




function logOutThings() {
    console.log('Here are your ', pokemon.length, ' pokemon!');

    for(let i = 0; i < pokemon.length; i++) {
        
        if(pokemon[i].type !== 'fire') {
            console.log('Good vs rock');

        } else {
            console.log('Not good vs rock');
        }

        console.log(pokemon[i]);
    }

}


/*
in class stuff
let x = 9;

for(let i = 0; i <= x; i++) {
    if(i % 2 === 0) {
        console.log(i, ' is even');
    } else {
        console.log(i, ' is odd');
    }
}

evenOrOdd(x);

function evenOrOdd(n) {
    if(n % 2 === 0) {
        console.log(n, ' is even');
    } else {
        console.log(n, ' is odd');
    }
}

evenOrOdd(3);
*/