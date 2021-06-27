'use strict';

function solution(m, product) {
    let answer = 0;

    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for (let i = 0; i < product.length; i++) {
        let salePrice = product[i][0] / 2 + product[i][1];
        let money = m - salePrice;
        let cnt = 1;

        for (let j = 0; j < product.length; j++) {
            let productPrice = product[j][0] + product[j][1];
            if (i !== j && productPrice <= money) {
                money -= productPrice;
                cnt++;
            }
        }

        answer = Math.max(answer, cnt);
    }
    return answer;
}

console.log(solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3]
]));