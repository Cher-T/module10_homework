const arr = [1, 2, 6, null, 0, NaN, undefined, 'Я - Строка', false, 5];
let even = 0;
let odd = 0;
let other = 0;
let zero = 0;

for(let i =0; i < arr.length; i++){
    if((typeof(arr[i]) === "number") && (!isNaN(arr[i]))){
        if(arr[i] == 0){
            zero++;
        }
        else if(arr[i] % 2 == 0){
            even++;
        }else{
            odd++;
        }
    }else{
        other++;
    }
}

console.log(`Всего элементов: ${arr.length}, 
    ${even} из которых чётные, ${odd} нечётных, 
    ${zero} нулей и ${other} не являются числами`)