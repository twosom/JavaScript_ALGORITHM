function solution(arr) {

    let answer = '';

    arr.forEach(value => {
        if (value.length > answer.length) {
            answer = value;
        }
    });

    return answer;

}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
