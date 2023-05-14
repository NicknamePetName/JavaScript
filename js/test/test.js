let person = {
    name: 'henry',
    age: 18,
}

for (let key in person) {
    console.log('键名：' + key + '；键值：' + person[key]);
}

console.log(Object.keys(person));