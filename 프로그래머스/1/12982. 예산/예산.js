function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => b - a);
    
    while(d.length > 0) {
        const price = d.pop();
        
        if (price > budget) return count;
        
        budget -= price;
        count ++;
    }
    
    return count;
}