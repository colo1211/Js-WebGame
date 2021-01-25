var 스크린= document.querySelector('#screen');
var 타임아웃;
var 시작시간;
var 종료시간;
var 반응시간모음=[]; // push 하기 위해서는 반드시 다음과 같이 []로 선언해 주어야 한다.

스크린.addEventListener('click',function (){
    if (스크린.classList.contains('waiting')){ // 현재 파란색
        스크린.classList.remove('waiting');
        스크린.classList.add('ready'); // 빨간색으로 변신!
        스크린.textContent='초록색이 되면 클릭하세요!';
        타임아웃=setTimeout(function (){
            시작시간= new Date();
            스크린.click();
        },Math.floor(Math.random()*1000)+2000);
    }else if (스크린.classList.contains('ready')){
        if (!시작시간){ // 초록색으로 변하지 않았는데 빨간색에서 클릭했다면?
            clearTimeout(타임아웃); // 타임아웃 종료 -> 파란색 화면으로 돌아가서 경고
            스크린.classList.remove('ready');
            스크린.classList.add('waiting'); // 게임 끝, 다시 파란색
            스크린.textContent='초록색으로 바뀌면 클릭하세요. 처음으로 돌아갑니다.';
        }else {
            스크린.classList.remove('ready');
            스크린.classList.add('now'); // 초록색으로 변신!
            스크린.textContent = '지금 클릭하세요!';
        }
    }else if (스크린.classList.contains('now')){
        끝시간 = new Date();
        var 반응시간 =(끝시간-시작시간)/1000;
        console.log(반응시간,'초');
        반응시간모음.push(반응시간);
        document.getElementById('result').textContent=반응시간+'초 걸리셨습니다.';
        스크린.classList.remove('now');
        스크린.classList.add('waiting'); // 게임 끝, 다시 파란색
        스크린.textContent='게임을 시작하려면 화면을 클릭하세요';
        시작시간= null; // null을 선언해 주지 않는다면, 다음 게임진행 불가!
        종료시간= null;
    }
})