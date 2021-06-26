function solution(str) {
    let answer = '';

    function isUpperCase(charCode) {
        return charCode >= 65 && charCode <= 90;
    }

    function isLowerCase(charCode) {
        return charCode >= 97 && charCode <= 122;
    }

    for (let ch of str) {
        let charCode = ch.charCodeAt();
        if (isUpperCase(charCode)) {
            answer += String.fromCharCode(charCode + 32);
        } else if (isLowerCase(charCode)) {
            answer += String.fromCharCode(charCode - 32);
        }
    }

    return answer;
}

console.log(solution('sTUdy'));