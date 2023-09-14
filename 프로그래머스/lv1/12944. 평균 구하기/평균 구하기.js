function solution(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr);
    return sum / arr.length;
}