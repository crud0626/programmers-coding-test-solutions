function solution(s) {
    const isEven = s.length % 2 === 0;
    const center = Math.ceil(s.length / 2);
    
    return s.slice(center-1, isEven ? center+1 : center);
}