const solution = (n, arr1, arr2) => arr1.map((num, i) => {
    const row = (num | arr2[i]).toString(2).padStart(n, "0");
    return row.replace(/1|0/g, (char) => char === "1" ? "#" : " ");
});