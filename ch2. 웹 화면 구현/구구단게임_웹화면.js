var num1= Math.floor(Math.random()*9)+1;
var num2= Math.floor(Math.random()*9)+1;
var correct = num1*num2;

var 바디 = document.body;

var 단어 = document.createElement('div');
단어.textContent = String(num1) + '*' + String(num2) + '=?';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력 = document.createElement('input');
폼.append(입력);

var 버튼 = document.createElement('button');
버튼.textContent='제출';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function 콜백 (situation){ // 폼.addEventListener 로 쳐야 할 것!
    situation.preventDefault(); // 엔터키 쳐도 바로 새로고침 안되도록 디폴트 방지
    if(correct === Number(입력.value)){
        결과창.textContent= '잘했어요!';
        num1= Math.floor(Math.random()*9)+1;
        num2= Math.floor(Math.random()*9)+1;
        correct = num1*num2;
        단어.textContent = String(num1) + '*' + String(num2) + '=?';
        입력.value=''; // 입력 이후 삭제
        입력.focus();
    }else {
        결과창.textContent= '다시 입력해봐요!';
        입력.value=''; // 입력 이후 삭제
        입력.focus();
    }
})

/*
ch1. 기존 구구단 코드

while(true) { // 답이 yes 일때, 새로운 문제 제출 반복문
    var num1= Math.floor(Math.random()*9)+1;
    var num2= Math.floor(Math.random()*9)+1;
    var correct = num1*num2;
    var 조건 = true;
    while(조건) { // 답이 no 일때 반복하는 반복문
        var my_answer = prompt(String(num1) + '*' + String(num2) + "=?");
        if (correct === Number(my_answer)){
            alert('딩동댕!');
            조건 = false; // 맞았을때 다음 문제 제출을 위한 탈출 조건
        } else {
            alert ('땡!');
        }
    }
}
 */