// Օգտագործելով ֆունկցիա գտնել երկչափ զանգվածի 3-ի բաժանվող թվերի գումարը։
// Գրել ռեկուրսիա
function Sum( array, sum ) {
    let x = array.reduce( (aggr, value) => {
        if (typeof value === "object") {
            return Sum(value, aggr);
        }
        else if (value % 3 === 0) return aggr + value;
        else return aggr;
    }, sum);
    return x;
}

let arr = [
    [1, 3, 5, 8],
    [11, 9, 2],
    [18, 2, 4],
    [8, 6, 41, 3, 6]
];

console.log( Sum( arr, 0 ) );