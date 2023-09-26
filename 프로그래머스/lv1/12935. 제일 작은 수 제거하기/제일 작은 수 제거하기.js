function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const minIdx = arr.indexOf(Math.min(...arr));
    arr.splice(minIdx, 1);
    
    return arr;
}