function writeCards(array, event) {
    const cards = [];
    for (let i=0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return cards
}

writeCards(array, event)

function countDown(number) {
    while (number > -1) {
        console.log(number)
        number = number - 1
    }
}
