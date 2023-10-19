function solution(arr1, arr2) {
    return arr1.map((target, i) => target.map((n, j) => n + arr2[i][j]));
}