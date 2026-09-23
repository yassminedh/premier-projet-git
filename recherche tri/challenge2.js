const arrays = [6, 5, 7, 11, 9, 10, 100];

console.log(arrays);

for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays.length - 1 - i; j++) { 
        if (arrays[j] > arrays[j + 1]) {
            let n = arrays[j];
            arrays[j] = arrays[j + 1];
            arrays[j + 1] = n;
        } 
    } 
} console.log(arrays);