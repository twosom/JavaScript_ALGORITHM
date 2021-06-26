function solution(str) {

    let answer = '';

    str.split('').forEach((value, index) => {
        if (str.indexOf(value) === index) {
            answer += value;
        }
    });

    return answer;
}

console.log(solution('ksekkset'));