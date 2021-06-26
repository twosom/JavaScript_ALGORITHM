function solution(str, target) {
    return str.split('')
        .filter(e => e === target).length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))