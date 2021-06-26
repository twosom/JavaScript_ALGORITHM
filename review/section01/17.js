function solution(arr) {
    let answer = [];

    arr.forEach((value, index) => {
        if (arr.indexOf(value) === index) {
            answer.push(value);
        }
    });

    return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
