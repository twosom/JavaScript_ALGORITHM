function solution(test) {
    let answer = 0;
    let testCount = test.length;
    let studentCount = test[0].length;

    for (let menti = 1; menti <= studentCount; menti++) {
        for (let mento = 1; mento <= studentCount; mento++) {

            let cnt = 0;
            for (let i = 0; i < testCount; i++) {
                let mentoRank, mentiRank;
                for (let j = 0; j < studentCount; j++) {

                    if (test[i][j] === mento) mentoRank = j;
                    if (test[i][j] === menti) mentiRank = j;
                }

                if (mentoRank < mentiRank) cnt++;
            }
            if (cnt === testCount) answer++;

        }
    }
    return answer;
}

console.log(solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
]));