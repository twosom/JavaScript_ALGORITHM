function solution(arr) {

    let max = Number.MIN_SAFE_INTEGER;
    let answer = 0;

    arr.forEach(value => {
        if (value > max) {
            max = value;
            answer++;
        }
    });

    return answer;

}

console.log(solution([130, 135, 148, 140, 150, 150, 153]));