function solution(A, B){
    let result = 0, len = A.length;
    
    const arrA = A.sort((a, b) => a - b);
    const arrB = B.sort((a, b) => b - a);
    
    for(let i = 0; i < len; i++) {
        result += arrA[i] * arrB[i];
    }

    return result;
}