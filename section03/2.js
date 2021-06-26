function solution(str) {

    str = str.toUpperCase();
    str = str.replace(/[^A-Z]/g, '');

    if (str !== str.split('').reverse().join('')) {
        return 'NO';
    }
    return 'YES';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));