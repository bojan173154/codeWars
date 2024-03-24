const moveZeros = (arr) => {
    let counter = 0;
    const scopedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        counter++;
        continue;
      }
      
      scopedArray.push(arr[i]);
    }
    
    for (let i = 0; i < counter; i++) {
      scopedArray.push(0);
    }
    
    return scopedArray;
};