function solution(a, b, c) {

    let max;
    max = a > b ? a : b;
    max = max > c ? max : c;

    let sum = a + b + c;

    return sum - max > max ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11));