var 스크린 = document.querySelector('#screen');
var 시작시간; // undefined
var 끝시간;
var 기록 = [];
var 대기;
스크린.addEventListener('click',function(){
    if (스크린.classList.contains('waiting')){ // 클래스이므로 #을 뺀다. 현재는 파랑
        스크린.classList.remove('waiting');
        스크린.classList.add('ready'); // 빨간색
        스크린.textContent='초록색이 되면 클릭';
        대기 = setTimeout(function (){
            시작시간 = new Date();
            console.log('클릭할 시간입니다.');
            스크린.click();
        },Math.floor(Math.random()*1000)+2000); // 0 ~ 1000 사이의 수
    }else if (스크린.classList.contains('ready')){
        if (!시작시간){ // 부정 클릭 총 쏘기 전에 출발, 빨강색일 때 클릭 | !시작시간 -> 시작시간이 undefined, Null, NaN, False등이 아닐 때
            clearTimeout(대기); // Timeout 취소.
            스크린.classList.remove('ready');
            스크린.classList.add('waiting'); // 파란색
            스크린.textContent='파란색에서 클릭하지 마세요. 초록색화면으로 넘어가기 기다리세요';
        }else { // 정상 출발, 시작시간이 있다면, 일정시간 대기 후 변경
            스크린.classList.remove('ready');
            스크린.classList.add('now'); // 초록색
            스크린.textContent = '클릭!';
        }
    }else if (스크린.classList.contains('now')){
        끝시간 = new Date();
        var 반응시간 = (끝시간 - 시작시간)/1000;
        기록.push(반응시간);
        document.querySelector('#result').textContent=반응시간+'초 걸렸습니다!';
        시작시간 = null;
        끝시간 = null; // 초기화를 해줘야 두번째 클릭에서도 부정행위를 방지 할 수 있다.
        스크린.classList.remove('now');
        스크린.classList.add('waiting'); // 파란색
        스크린.textContent='클릭해서 시작하세요';
    }
})

