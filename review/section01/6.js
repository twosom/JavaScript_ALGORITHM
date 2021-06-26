function solution(arr) {

    let oddNums = arr.filter(e => e % 2 !== 0);
    let min = Number.MAX_SAFE_INTEGER;
    oddNums.forEach(value => {
        min = value < min ? value : min;
    });

    let sum = oddNums.reduce((c, v) => c + v, 0);

    return [min, sum];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));