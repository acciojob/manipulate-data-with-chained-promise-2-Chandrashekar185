function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then(array => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').innerHTML = evenNumbers.join(',');
        }, 1000);

        return evenNumbers; 
    })
    .then(evenNumbers => {
        const multiplied = evenNumbers.map(num => num * 2);
        setTimeout(() => {
         document.getElementById('output').innerHTML = multiplied.join(',');
        }, 2000);
    });
}
manipulateArray();