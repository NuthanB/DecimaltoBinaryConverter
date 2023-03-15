function Binary() {
    let a = document.getElementById("decimal").value;
    let i = 1, b = 0;
    while (a > 0) {
      b = b + (a % 2) * i;
      i *= 10;
      a = parseInt(a / 2);
    }
    document.getElementById("binary").innerHTML = b;
  }
  //Binary to Decimal
  
  function Decimal() {
    let x = document.getElementById("num").value;
    let s = x.toString();
    let flag=false;
    let z = "Enter a Valid Binary Number"
    check(s);
    function check(str) {
      for (let k = 0; k < str.length; k++) {
        if (str[k] == "0" || str[k] == "1") {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
    }
    if(!flag){
      document.getElementById("dec").innerHTML = z ;
    }
    if(flag)
    {
    let j = 0, n = 0;
    while (x != 0) {
      let rem = x % 10;
      n += (rem * Math.pow(2, j));
      j++;
      x = parseInt(x / 10);
  
    }
    document.getElementById("dec").innerHTML = n;
    console.log(n)
  }
  }