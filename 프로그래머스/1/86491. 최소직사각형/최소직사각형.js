function solution(sizes) {
    let big = 0, small = 0;
    
    sizes.forEach(([a, b]) => {
        if (a < b) [a, b] = [b, a];
        
        big = Math.max(big, a);
        small = Math.max(small, b)
    });

    return big * small;
}