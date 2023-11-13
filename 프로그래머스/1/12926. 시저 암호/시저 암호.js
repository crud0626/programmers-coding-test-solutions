const codeLastNum = { lower: 90, upper: 122 };

function solution(s, n) {
    let result = "";
    
    for (const char of s) {
        if (char === " ") {
            result += char;
            continue;
        }
        
        const charCode = char.charCodeAt();
        const lastCode = codeLastNum.lower >= charCode ? codeLastNum.lower : codeLastNum.upper;
        let nextCode = charCode + n;
        
        if (nextCode > lastCode) nextCode = nextCode - 26;
        
        result += String.fromCharCode(nextCode);
    }
    
    return result;
}