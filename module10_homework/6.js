const arr = [1, 1, 1, 1, 2];
let result = true;
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            result = false;
        }
    }
}

console.log(result);