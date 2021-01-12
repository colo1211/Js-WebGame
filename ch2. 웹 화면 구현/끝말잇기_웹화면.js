var 바디 = document.body; // body 부분 선택
//1 <div> 태그 내에 제로초 입력
var 단어 = document.createElement('div');// 단어라는 div 태그를 생성하고,
단어.textContent = '제로초';// div 내에 컨텐츠를 입력한다. 문제는 변수에 저장만 되었음, 화면표시X
document.body.append(단어); // 새로 만든 div 태그를 body에 추가
//2 입력창 생성
var 입력창 = document.createElement('input'); //input 태그생성
document.body.append(입력창); // body 추가
//3 버튼 태그 생성 및 텍스트 입력
var 버튼= document.createElement('button'); //button 태그 생성
버튼.textContent='입력'; // 버튼 내에 입력하고자 하는 텍스트
document.body.append(버튼);
//4 결과 창 생성
var 결과창 = document.createElement('div');
document.body.append(결과창);

//버튼.addEventListener(a,b);
버튼.addEventListener('click',function 콜백함수(){
    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]) { //태그안에 들어가는 글자 : textContent, input 안에 들어가는 글자 : value
        결과창.textContent='딩동댕';
        단어.textContent=입력창.value;
        입력창.value='';
    }else {
        결과창.textContent='땡';
    }
});
