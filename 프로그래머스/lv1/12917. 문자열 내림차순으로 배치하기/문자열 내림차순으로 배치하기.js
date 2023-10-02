const solution = (s) => s
    .split("")
    .sort((a, b) => a > b ? -1 : 1)
    .join("")
;