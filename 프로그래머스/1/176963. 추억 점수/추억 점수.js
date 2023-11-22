function solution(name, yearning, photo) {
    const scores = name.reduce((obj, n, i) => {
        obj[n] = yearning[i];
        return obj;
    }, {});
    
    return photo.map((arr) => arr.reduce((acc, n) => acc + (scores[n] || 0), 0));
}