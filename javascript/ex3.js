function substituiPares(ar){
    for (let i = 0; i < ar.length; i++) {
        if (!ar) return;
        if (!ar.length) return;        

        if (ar[i] % 2 === 0) {
            console.log(`Substituindo ${ar[i]} por 0...`);
            ar[i] = 0;
        } 
    }
    return ar;
}

console.log(substituiPares([20, 2, 4, 6, 80, 66, 94, 90])); 