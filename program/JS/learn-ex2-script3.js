
//2.3 Заполнение n-мерной матрицы и вывод чисел, которые больше среднего арифметического матрицы
//первый способ
    /*let n = parseInt(prompt());//размерность матрицы
    let sum = 0;
    let matrix = [];
    for (let k=0;k<n;k++){
      matrix.push([]);
      for (let i=0;i<n;i++){
        matrix[k].push(parseInt(prompt()));
      }
      sum=sum+matrix[k].reduce((a,b)=>a+b);
    }
    let f = sum/n**2;//среднее арифметическое матрицы
    matrix.forEach((item2) => {
      item2.forEach((el) => {if (el>=f) { 
        console.log(el);
      };
    });
    });*/

//второй способ
      /*let n = parseInt(prompt());//размерность матрицы
      let sum = 0;
      let matrix = [];
      for (let k=0;k<n;k++){
        matrix.push([]);
        for (let i=0;i<n;i++){
          matrix[k].push(parseInt(prompt()));
        }
        sum=sum+matrix[k].reduce((a,b)=>a+b);
      }
      let f = sum/n**2;//среднее арифметическое матрицы
      for (let j of matrix){
        for(let m of j){
          if (m>=f){
            console.log(m);
          }
        }
      }*/
//третий способ
       /* let n = parseInt(prompt());//размерность матрицы
        let sum = 0;
        let matrix = [];
        for (let i=0;i<n;i++){
            matrix[i].prompt().split(" ").map(Number);
            sum=sum+matrix[i].reduce((a,b)=>a+b);
          }
        let f = sum/n**2;//среднее арифметическое матрицы
        for (let j of matrix){
          for(let m of j){
            if (m>=f){
              console.log(m);
            }
          }
        }*/
//третий способ (правильный для stepik)
      let n = parseInt(prompt());//размерность матрицы
      let sum = 0;
      let matrix = [];
      for (let i=0;i<n;i++){
          matrix[i]=prompt().split(" ").map(Number);
          sum=sum+matrix[i].reduce((a,b)=>a+b);
        };
      let f = sum/n**2;//среднее арифметическое матрицы
      for (let j of matrix){
        for(let m of j){
          if (m>=f){
            console.log(m);
          }
        }
      }