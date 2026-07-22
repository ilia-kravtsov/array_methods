const numbers_1 = [1,2,3,4,5,6,7,8,9,10];

function indexOf_1(array, element, startIndex = 0) {

    let start = startIndex;

    if (start < 0) {
        start = array.length + startIndex;
        console.log(start)
    }

    for (let i = start; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }

    return -1;
}

console.log(indexOf_1(numbers_1, 6, -5))