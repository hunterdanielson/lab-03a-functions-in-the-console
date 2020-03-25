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
    const strongVsRock = [];

    for(let i = 0; i < pokemon.length; i++) {
        console.log(pokemon[i]);
        if(pokemon[i].type !== 'fire') {
            strongVsRock.push(pokemon[i]);

        }
    }

    console.log('Here are your pokemon numbers that are strong vs rock: ');
    
    for(let i = 0; i < strongVsRock.length; i++) {
        console.log(strongVsRock[i].name);
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