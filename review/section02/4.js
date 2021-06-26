function solution(arr) {

    let score = 0;
    let bonus = 0;

    arr.forEach(value => {
        switch (value) {
            case 0:
                bonus = 0;
                break;
            case 1:
                bonus += 1;
                score += bonus;
                break;
        }
    });

    return score;

}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));