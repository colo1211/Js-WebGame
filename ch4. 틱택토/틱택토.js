var 바디 = document.body;
var 테이블 = document.createElement('table');

var 칸들 = [];

var 줄들 = [];

var 턴 = 'X';

// 변수 내에 함수를 담을 수 있다.
var 비동기콜백 = function 비동기_콜백(이벤트){
  console.log(이벤트.target); // 칸
  console.log(이벤트.target.parentNode); // 칸의 해당하는 줄
  console.log(이벤트.target.parentNode.parentNode); // 테이블

  var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);

  var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
  console.log('클릭한 칸에 해당하는 줄', 몇줄, '클릭힌 칸', 몇칸);

  // 빈칸 일 때
  if (칸들[몇줄][몇칸].textContent === ''){
      console.log('빈칸 입니다.');
      칸들[몇줄][몇칸].textContent= 턴; // x입력
      if(턴 === 'X'){
          턴 = '0';
      }
      else {
          턴 ='X';
      }
  }
  // 세칸이 다 채워졌는지 확인

    if (){

    }
};

for (var i=1;i<=3;i++){
    var 줄 = document.createElement('tr');// 반복문을 따라서 테이블에 row 추가
    줄들.push(줄);
    칸들.push([]); // 이 코드로 '칸들' 배열에 [] 를 넣을 수 있다.
    for (var j=1;j<=3;j++){
        var 칸 = document.createElement('td');
        칸.addEventListener('click',비동기콜백);
        칸들[i-1].push(칸); // 이 코드로 '칸들'배열에 []추가 이후, td를 삽입 할 수 있다.
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);

console.log('줄들',줄들, '칸들',칸들);



