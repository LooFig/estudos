function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 ==0;
}

const meuArray = [1, 23, 50, 67, 30, 49];

console.log(filtraPares(meuArray));