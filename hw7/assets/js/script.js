// 第一个JavaScript，这是你怎样declare一个方法：
function averageThreeNumbers(a, b, c) { // 有点像java和python的结合 有{} 不用： 而且参数又没有variable type
  let sum = a + b + c;// 你还不能直接给sum 填个值进去， 得用let
  let avg = sum / 3;
  return avg;
}

function createSentence(num, noun) {
  let s = 'On average, a Berkeley student has ' + num + ' ' + noun + 's.'; // 拼接string用 +， 里面可以有数字
  return s;
}

function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'fish');

console.log(sentence); //这是print一个东西的指令
