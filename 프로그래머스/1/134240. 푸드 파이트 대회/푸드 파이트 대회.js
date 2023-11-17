function solution(food) {
    let left = "", right = "";
    
    for(let i = 1; i < food.length; i++) {
        const temp = `${i}`.repeat(~~(food[i] / 2));
        left += temp, right = temp + right;
    }
    
    return `${left}0${right}`;
}