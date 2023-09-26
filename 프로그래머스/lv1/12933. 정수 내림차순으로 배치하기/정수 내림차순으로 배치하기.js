function solution(n) {
    const sorted = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("");
    
    return +sorted;
}