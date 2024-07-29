let yourNum = prompt('Enter your number');

console.log (typeof +yourNum);
if (((typeof +yourNum) === 'number') && (!isNaN(+yourNum))){
    if (yourNum%2 == 0){
        alert('Чётное число');
    }else{
        alert('Нечётное число');
    }
}else{
    alert('Вы ошиблись. Повторите попытку')
}