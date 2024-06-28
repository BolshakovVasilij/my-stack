
    //Вывод количества четных и нечетных чисел
    let n = parseInt(prompt());
    odd=0;
    even=0;
    for (let i = 1; i <= n; i++) {
    (i%2===0) ? even++:odd++;
    }
    console.log (even,odd);

