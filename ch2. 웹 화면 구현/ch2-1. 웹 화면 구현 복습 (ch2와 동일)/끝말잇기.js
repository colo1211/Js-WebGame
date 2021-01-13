// # 1. Enter를 쳤을때 제출 (form 태그를 활용)
var 바디 = document.body; // HTML 문서에서 body 태그 부분이 선택된다.

// HTML 태그를 JS에서 만드는 방법
var 단어 = document.createElement('div');
단어.textContent = '제로초';
document.body.append(단어);

var 폼 = document.createElement('form'); // Enter를 눌렀을 때 제출을 지원한다.
document.body.append(폼);

var 입력창 = document.createElement('input'); // input의 값은 textContent가 아닌 .value이다.
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='등록';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function callback(event){
    event.preventDefault();
    if (단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        결과창.textContent='정답';
        단어.textContent=입력창.value;
        입력창.value='';
        입력창.focus();
    }else {
        결과창.textContent='오답';
        입력창.value='';
        입력창.focus();
    }
})

/* #2. 마우스로 클릭했을 때, 제출
var 바디 = document.body; // HTML 문서에서 body 태그 부분이 선택된다.

// HTML 태그를 JS에서 만드는 방법
var 단어 = document.createElement('div');
단어.textContent = '제로초';
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
document.body.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='등록';
document.body.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function callback(event){
    event.preventDefault();
    if (단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        결과창.textContent='정답';
        단어.textContent=입력창.value;
        입력창.value='';
        입력창.focus();
    }else {
        결과창.textContent='오답';
        입력창.value='';
        입력창.focus();
    }
})

 */