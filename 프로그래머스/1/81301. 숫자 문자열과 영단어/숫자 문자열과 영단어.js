const chars = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
]);

function solution(s) {
    let result = "", temp = "";
    
    for(const c of s) {
        if (!isNaN(+c)) {
            result += c;
            continue;
        }
        
        temp += c;
        
        if (chars.has(temp)) {
            result += chars.get(temp);
            temp = "";
        }
    }
    return +result;
}