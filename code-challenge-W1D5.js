//1

function temperatureConverter(tempC) {
    fahrenheit = (tempC * 9/5) + 32;
    console.log(`${tempC}°C is ${fahrenheit}°F`);
}
temperatureConverter(32);

//2
function currencyConverter(yen) {
    const usd = (yen *  0.007547);
    console.log(`${yen} Yen is $${usd}`);
}
currencyConverter(100);


//3 
function grid(row, column) {
    let rows = 0
    let columns = 0
    for (let i = 0; i < row; i++) {
        rows = rows + "*"
        for (let j = 0; j < column; j++) {
            columns = columns + "^"
        }
        for (let j = 0; j<= column; j++) {
            columns = columns + '@'
        }
    }
    return rows;
    return columns;
}
console.log(grid(3, 3))