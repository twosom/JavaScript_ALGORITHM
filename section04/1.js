function solution(arr) {

    let max = Number.MIN_SAFE_INTEGER;
    let answer = [];

    arr.forEach(value => {
        let sum = value.toString().split('')
            .reduce((c, v) => c + Number(v), 0);

        if (sum >= max) {
            max = sum;
            answer.push(value);
        }
    });

    return Math.max(...answer);
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));