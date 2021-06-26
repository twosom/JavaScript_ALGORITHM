function solution(str) {

    let mid = Math.floor(str.length / 2);

    if (str.length % 2 === 0) {
        return str.substr(mid - 1, 2);
    } else {
        return str[mid];
    }

}

console.log(solution('oppo'));