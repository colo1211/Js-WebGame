var num1= Math.floor(Math.random()*9);
var num2= Math.floor(Math.random()*9);
var correct = num1*num2;

var 내용 = document.createElement('div');
내용.textContent = String(num1) + '*' + String(num2) + '=?';
document.body.append(내용);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='제출!';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit',function 콜백함수(event){
    event.preventDefault();

    if (Number(입력창.value)===correct){
        결과창.textContent='정답';
        num1= Math.floor(Math.random()*9);
        num2= Math.floor(Math.random()*9);
        correct = num1 * num2;
        내용.textContent = String(num1) + '*' + String(num2) + '=?'; // 새로운 문장을 띄우기 위한 코드
        입력창.value='';
        입력창.focus();
    }else{
        결과창.textContent='오답';
        입력창.value='';
        입력창.focus();
    }
})