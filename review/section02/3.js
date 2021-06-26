function solution(a, b) {

    let answer = '';
    a.forEach((value, index) => {
        let result = value - b[index];

        switch (result) {
            case 1:
            case -2:
                // A가 이기는 것
                answer += 'A';
                break;
            case 0:
                //비기는 것
                answer += 'D';
                break;
            default:
                // B가 이기는 것
                answer += 'B';
                break;
        }
    });

    return answer;

}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));