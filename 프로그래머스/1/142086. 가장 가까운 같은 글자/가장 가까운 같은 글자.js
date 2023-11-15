function solution(s) {
    const counter = new Map();
    
    return [...s].map((char, i) => {
        const prevIdx = counter.get(char);
        counter.set(char, i);
        
        return prevIdx === undefined ? -1 : i - prevIdx;
    });
}