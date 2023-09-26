function solution(s, count = 0, zeros = 0) {
    const x = s.replace(/0+/g, ""), lenX = x.length;
    
    count++;
    zeros += s.length - lenX;
    
    if (x === "1") return [count, zeros];
    
    return solution(lenX.toString(2), count, zeros);
}