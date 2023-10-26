function solution(n) {
    const reverseTriple = n.toString(3).split('').reverse().join('');
    return parseInt(reverseTriple, 3);
}