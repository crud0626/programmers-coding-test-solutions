function solution(s) {
    const counter = new Map();
    const answer = new Array(s.length).fill(-1);
    
    return [...s].map((char, i) => {
        const prevIdx = counter.get(char);
        counter.set(char, i);
        
        return prevIdx === undefined ? -1 : i - prevIdx;
    });
}