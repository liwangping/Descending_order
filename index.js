function descendingOrder(n){
    //...
    // console.log(typeof(n));
    var newstr = n + ' ';
    var newnum = newstr.split('').sort((a , b) =>{
        return b-a;
    })
    newnum.pop();
    return Number(newnum.join(''));
  }

  console.log(descendingOrder(1)+"+++++");
  console.log(descendingOrder(0)+"+++++");
  console.log(descendingOrder(123456789)+"+++++");