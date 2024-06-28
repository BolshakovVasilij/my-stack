//2.1 Разделить числа на нечетные и четные по массивам  
  let count = parseInt(prompt());
  let arr1 = [];
  let arr2 = [];
  for (let i=1;i<=count;i++){
      (i%2===1)? arr1.push(i):arr2.push(i);
  }
  console.log (arr1);
  console.log (arr2);