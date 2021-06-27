function solution(arr) {

    let answer = [];

    arr.forEach(value => {
        let reversed = value.toString().split('')
            .reverse().join('');``
        reversed = Number(reversed);

        let count = 0;

        for (let i = 1; i <= reversed; i++) {
            if (Number.isInteger(reversed / i)) {
                count++;
            }
        }

        if (count === 2) {
            answer.push(reversed);
        }

    });
    return answer;
}


console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));