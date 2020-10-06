module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for (let arr of bracketsConfig){
    brackets[arr[1]] = arr[0];
  }
  let cash = [];
  for (chr of str){
    let pair = brackets[chr];
    if(pair == chr){
if(cash[cash.length - 1] == chr){
cash.pop();
}
else{
  cash.push(chr);
}
    }
    else{
if (pair){
if(pair == cash[cash.length - 1]){
cash.pop();
}
else{
  return false;
}
}
else{
cash.push(chr);
}
  }
}
  if (cash.length == 0){
    return true;
  }
  else{
    return false;
  }

}

/* const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
console.log(check('((()))()', config1));
console.log(check('[(])', config2));
console.log(check('[]()', config2)); */