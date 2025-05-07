  
  export const generateItems = count => {
    const rnames = [];
    for (let i = 0; i < count; i++) {
      const char = String.fromCharCode(65 + (i % 26));
      rnames.push({id: `${i}`, name: `${char}Item ${i}`});
    }
    return rnames;
  };

  export const groupData = filtereddata => {
    const grouped = {};
    for (let item of filtereddata) {
      const letter = item.name[0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(item);
    }
    const sections = Object.keys(grouped)
      .sort()
      .map(letter => ({
        title: letter,
        data: grouped[letter],
      }));
    return sections;
  };