function solution(n, k) {
    const lamb = 12000, drink = 2000;
    return lamb * n + drink * (k - ~~(n / 10));
}