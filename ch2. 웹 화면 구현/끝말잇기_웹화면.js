var 바디 = document.body; // body 부분 선택
//1 <div> 태그 내에 제로초 입력
var 단어 = document.createElement('div');// 단어라는 div 태그를 생성하고,
단어.textContent = '제로초';// div 내에 컨텐츠를 입력한다. 문제는 변수에 저장만 되었음, 화면표시X
document.body.append(단어); // 새로 만든 div 태그를 body에 추가

var 폼 = document.createElement('form');
document.body.append(폼);

//2 입력창 생성
var 입력창 = document.createElement('input'); //input 태그생성
폼.append(입력창); // body 추가
//3 버튼 태그 생성 및 텍스트 입력
var 버튼= document.createElement('button'); //button 태그 생성
버튼.textContent='입력'; // 버튼 내에 입력하고자 하는 텍스트
폼.append(버튼);
//4 결과 창 생성
var 결과창 = document.createElement('div');
document.body.append(결과창);

//버튼.addEventListener(a,b);
폼.addEventListener('submit',function 콜백함수(이벤트){
    이벤트.preventDefault(); // Enter를 치면 기본적으로 다른 페이지로 넘어가게 되어있음(폼의 기본 동작, Submit) 이 현상을 막기 위해, 폼.preventDefault();
    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]) { //태그안에 들어가는 글자 : textContent, input 안에 들어가는 글자 : value
        결과창.textContent='딩동댕';
        단어.textContent=입력창.value;
        입력창.value=''; // 입력 이후 삭제
        입력창.focus(); // 마우스 안가져다 대도 되도록 커서 유지
    }else {
        결과창.textContent='땡';
        입력창.value=''; // 입력 이후 삭제
        입력창.focus();
    }
});
