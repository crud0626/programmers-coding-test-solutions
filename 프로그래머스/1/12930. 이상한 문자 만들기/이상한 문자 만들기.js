function solution(s) {
    let count = 0, answer = "";
    
    for(const char of s) {
        if (char === " ") {
            count = 0;
            answer += char;
            continue;
        }
        
        answer += count % 2 ? char.toLowerCase() : char.toUpperCase();
        count++;
    }
    
    return answer;
}