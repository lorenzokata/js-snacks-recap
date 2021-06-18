// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const array = [1,2,3,4,5,6,7,8,9];
const a = 3;
const b = 7;

const newArray = getSubArray(array, a, b);

console.log(newArray);

function getSubArray(array, a, b) {
    
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    const newArray = array.filter((item, i) => {
        console.log(item, i);
        return i>=a && i<=b;
    });
    
    return newArray;
};