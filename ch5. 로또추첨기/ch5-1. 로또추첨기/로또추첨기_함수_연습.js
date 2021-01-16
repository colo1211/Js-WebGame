var 숫자후보군 = Array(45).fill().map(function (element,index){
    return index+1;
    }
);
// console.log(숫자후보군);

var 셔플 = [];

while(숫자후보군.length>0){
    var temp = 숫자후보군.splice(Math.floor(Math.random()*숫자후보군.length),1)[0];
    셔플.push(temp);
}
// 배열명.splice(a,b) : 배열명 index a에서 b만큼 숫자를 추출한다. 여기서는 숫자를 하나만 추출하므로 [0]
// console.log(셔플);

var 당첨번호 = 셔플.slice(0,6); // 셔플.slice(a,b); : 셔플배열에서 a이상 b미만 index 만큼 숫자를 추출한다.
var 보너스번호 = 셔플.pop(); // 셔플 배열의 맨 뒤 요소를 추출한다.
console.log('당첨번호:',당첨번호.sort(function (a,b){return a-b;}),'보너스번호:',보너스번호);
// .sort() -> 10의 자리, 혹은 최상위 자리수를 기준으로 정렬을 시도한다.
// 일반적인 정렬 방법
// 1. 오름차순
// 배열명.sort(function(a,b) {return a-b;});     -> a-b가 0보다 크면 정렬 시도
// 2. 내림차순
// 배열명.sort(function(a,b) {return b-a;});     -> b-a가 0보다 크면 정렬 시도