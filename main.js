/*
Data una lista della spesa, stampare in console gli elementi della lista individualmente,
prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato,
utilizzando uno dei due cicli scritti al punto precedente.
*/

// ARROW
let marketList = ["Rosemary", "Lavender", "Cinnamon", "Amethyst", "Pyrite", "White candles", "Holy pole"];

/*
// FOR LOOP
for (let i=0; i<marketList.length; i++){
    console.log(marketList[i]);
}
*/

// WHILE LOOP
let itemList = 0;

while (itemList < marketList.length){
    console.log(marketList[itemList]);
    itemList++;
}

