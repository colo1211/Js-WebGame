var 후보군 = Array(45).fill().map(function (element,index){
    return index+1;
});
// console.log(후보군);

var 셔플 = []; // 0부터 45까지의 랜덤 숫자를 담는 배열
while(후보군.length>0){
    var temp = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
    셔플.push(temp);
}
// console.log(셔플);

var 당첨숫자 = 셔플.slice(0,6);
var 보너스번호 = 셔플[셔플.length-1];

console.log('당첨숫자:',당첨숫자, '보너스 번호:',보너스번호);
console.log('당첨숫자:',당첨숫자.sort(), '보너스 번호:',보너스번호);
console.log('당첨숫자:',당첨숫자.sort(function (a,b){return a-b;}), '보너스 번호:',보너스번호);

