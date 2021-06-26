function solution(str) {
    return str.split('')
        .filter(e => e.charCodeAt() >= 65 && e.charCodeAt() <= 90)
        .length;
}

console.log(solution('KoreaTimeGood'));