function solution(t, p) {
    const len = p.length, lastIdx = t.length - len;
    let answer = 0;

    p = +p;
    for (let i = 0; i <= lastIdx; i++) {
        const target = +t.slice(i, i + len);
        if (target <= p) answer++;
    }

    return answer;
}