function solution(phone_number) {
    const starLen = phone_number.length - 4;
    return "*".repeat(starLen) + phone_number.slice(starLen);
}