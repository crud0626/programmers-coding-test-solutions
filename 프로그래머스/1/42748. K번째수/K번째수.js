const solution = (array, commands) => commands.map(([s, e, i]) => {
    const arr = array.slice(s-1, e).sort((a, b) => a - b);
    return arr[i-1];
});