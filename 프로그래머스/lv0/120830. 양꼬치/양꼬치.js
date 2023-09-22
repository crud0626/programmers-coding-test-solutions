function solution(n, k) {
    const priceN = 12000, priceK = 2000;
    const payK = k - ~~(n / 10);

    return priceN * n + priceK * payK;
}