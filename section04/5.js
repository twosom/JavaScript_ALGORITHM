function solution(t, arr) {

    let set = new Set();


    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                set.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }

    let a = Array.from(set)
        .sort((a, b) => b - a);

    return a[t - 1];
}


console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));