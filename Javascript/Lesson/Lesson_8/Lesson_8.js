function maxNumber(x, y, z) {
    let max;
    if (x > y) {
        max = x;
    } else {
        max = y;
    }
    if (z > max) {
        max = z;

    }
    return max
}

console.log(maxNumber(5, 8, 1));


function sortString(...arrString) {
    for (let i = 0; i < arrString.length-1; i++) {
        let arr;
        for (let j = i+1; j < arrString.length; j++) {
            if (arrString[i] > arrString[j]) {
                arr = arrString[j];
                arrString[j] = arrString[i];
                arrString[i] = arr;
            }
        }
    }
    return arrString;
}

console.log(sortString('Y', 'Veronica', 'Mounika','Veronica', 'Shaunik', 'Karen'));