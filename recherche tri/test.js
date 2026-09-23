let arrays = [1, 2, 3, 4, 6, 5, 7, 11, 9, 10];
for (i = 0; i< arrays.length; i++){
    for (j = i; j< arrays.length-i-1; j++ ){
        if(arrays[j]>arrays[j+1]){
            let n = arrays[j];
            arrays[j] = arrays[j+1];
            arrays[j+1]=n;
        } 
    } 
} console.log(arrays);


