function solution(phoneBook) {
  const table = new Set(phoneBook);

  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i++) {
      const prefix = number.slice(0, i);
        
      if (table.has(prefix)) return false;  
    };
  };

  return true;
}