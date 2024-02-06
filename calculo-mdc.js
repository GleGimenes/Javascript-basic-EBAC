function mdc(a, b) {
    while(b != 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  
  
  let num1 = 30;
  let num2 = 7;
  console.log(`O MDC de ${num1} e ${num2} é ${mdc(num1, num2)}`);
  