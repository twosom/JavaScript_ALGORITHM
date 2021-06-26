function solution(arr) {

    let row = Array.from({length: arr.length}).fill(0);
    let col = Array.from({length: arr.length}).fill(0);

    let cross = 0;
    let revCross = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            row[i] += arr[i][j];
            col[i] += arr[j][i];
        }

        cross += arr[i][i];
        revCross += arr[4 - i][i];
    }

    return Math.max(...row, ...col, cross, revCross);
}

console.log(solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
]));