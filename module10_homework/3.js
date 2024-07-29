let yourString = prompt('Enter your string');
let reverse = '';
for (let i = yourString.length-1; i >= 0; i--){
    reverse += yourString[i];
}
console.log(reverse);