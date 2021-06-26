function solution(str) {

    let answer = '';

    function isLowerCase(charCode) {
        return charCode >= 97 && charCode <= 122;
    }

    for (let ch of str) {
        let charCode = ch.charCodeAt();
        if (isLowerCase(charCode)) {
            answer += String.fromCharCode(charCode - 32);
        } else {
            answer += ch;
        }
    }

    return answer;

}

console.log(solution('ItIsTimeToStudy'));