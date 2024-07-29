let map = new Map();

map.set('dddddd', 2);
map.set(1, 'ух');
map.set(false, 'Да');
map.set(5, 13);
map.set(true, 'Нет');
map.set('Уверен?', 'Возможно.');


for(let key of map.keys()){
    console.log(`Ключ — ${key}, значение — ${map.get(key)}`);
}