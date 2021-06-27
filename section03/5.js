function solution1(str) {

    let answer = '';
    let cnt = 1;
    str += ' ';

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            answer += str[i];
            if (cnt > 1) {
                answer += cnt;
                cnt = 1;
            }
        }
    }

    return answer;
}


console.log(solution1('KKHSSSSSSSE'));


function solution2(str) {

    let set = new Set(str.split(''));
    let answer = '';

    for (let ch of set.values()) {

        let num = str.lastIndexOf(ch) - str.indexOf(ch) + 1;
        answer += ch;
        if (num > 1) answer += num;
    }

    return answer;

}

console.log(solution2('KKHSSSSSSSE'));