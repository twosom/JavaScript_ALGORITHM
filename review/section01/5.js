function solution(arr) {
    let min = Number.MAX_SAFE_INTEGER;

    arr.forEach(value => {
        min = value < min ? value : min;
    });
    return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));