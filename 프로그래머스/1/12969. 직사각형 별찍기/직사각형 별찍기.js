process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(n => Number(n));
    
    const row = `${"*".repeat(n)}\n`;
    console.log(row.repeat(m));
});