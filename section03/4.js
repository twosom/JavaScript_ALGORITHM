function solution1(str, t) {

    let answer = [];

    for (let i = 0; i < str.length; i++) {

        let n1, n2;

        //1
        for (let j1 = i; j1 >= 0; j1--) {
            if (str[j1] === t) {
                n1 = i - j1;
                break;
            } else {
                n1 = Number.MAX_SAFE_INTEGER;
            }
        }


        //2
        for (let j2 = i; j2 <= str.length; j2++) {
            if (str[j2] === t) {
                n2 = j2 - i;
                break;
            } else {
                n2 = Number.MAX_SAFE_INTEGER;
            }
        }


        answer.push(Math.min(n1, n2));
    }

    return answer;

}

console.log(solution1('teachermode', 'e'));


function solution2(str, t) {

    let answer = [];
    let temp = 1000;

    for (let ch of str) {
        if (ch === t) {
            temp = 0;
        } else {
            temp++;
        }
        answer.push(temp);
    }

    temp = 1000;

    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] === t) {
            temp = 0;
            answer[i] = 0;
        } else {
            temp++;
            answer[i] = Math.min(answer[i], temp);
        }

    }
    return answer;

}

console.log(solution2('teachermode', 'e'));