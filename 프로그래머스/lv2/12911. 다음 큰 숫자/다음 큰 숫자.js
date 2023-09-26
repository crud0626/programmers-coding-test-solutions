function solution(n) {
    const bitN = n.toString(2), onesOfN = bitN.match(/1/g).length;
    let nextN = n+1;
    
    while(true) {
        const onesOfNextN = nextN.toString(2).match(/1/g).length;
        
        if (onesOfNextN === onesOfN) return nextN;

        nextN++;
    }
}