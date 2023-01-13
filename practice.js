
function grid(x, y) {
    for (let i = 0; i < x; i++) {
        let n = '';
        for (let j = 0; j < y; j++) {
            n = n + '#'
        }
        console.log(n)
        }
    }
grid(3, 2)