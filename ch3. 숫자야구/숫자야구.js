var 바디 = document.body;

var 숫자후보;
var 숫자배열;

function 숫자뽑기 () {
    숫자후보 = [0,1,2,3,4,5,6,7,8,9];
    숫자배열 = [];
    for(var i =0;i<4;i++){
        var 뽑은숫자 = 숫자후보.splice(Math.floor(Math.random()*(9-i)),1)[0];
        숫자배열.push(뽑은숫자);
    }
} // 새로운 숫자를 뽑는 함수.

// console.log(숫자배열);

숫자뽑기(); // 맨 처음에 한번 뽑기!

var 게임제목 = document.createElement('h1');
게임제목.textContent='숫자야구게임 랜덤 4자리를 맞춰보세요! 기회는 총 5번';
바디.append(게임제목);

// var 결과 = document.createElement('h2');
// document.body.append(결과);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
입력창.type='text';
입력창.maxLength=4;
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='타격!';
폼.append(버튼);

var 결과 = document.createElement('h2');
document.body.append(결과);

var not_correct=0; // 틀린 횟수

폼.addEventListener('submit',function callback(situation){ // 비동기: 언제 실행 될 지 모름
    situation.preventDefault();
    console.log('답 배열:',숫자배열);
    var 사용자_답= 입력창.value;
    // 답이 맞을때
    if (숫자배열.join('') === 사용자_답) {
        결과.textContent = '홈런';
        입력창.value = '';
        입력창.focus();
        숫자뽑기();// 새로운 숫자를 뽑는다.
        not_correct=0;
    }
    // 답이 틀릴때
    else {
        var 사용자_답_배열 = 사용자_답.split(''); // 사용자의 입력 숫자를 배열화
        console.log("사용자_답_배열:", 사용자_답_배열);
        var 스트라이크 = 0; // count 스트라이크
        var 볼 = 0; // count 볼
        not_correct++; // 틀렸으면 일단 카운트
        if (not_correct >= 5) { // 틀린 횟수 5번 이상이면?
            결과.textContent = '5번 넘어서 실패!, 답은' + 숫자배열.join('') +'였습니다.'; //답 알려주고
            입력창.value = '';
            입력창.focus();
            숫자뽑기();//숫자를 새로 뽑는다.
            not_correct = 0;
        }
        else { // 틀린 횟수가 5번 아래면? 스트라이크와 볼을 확인 한다.
            for (var i = 0; i < 4; i++) {
                if (Number(사용자_답_배열[i]) === 숫자배열[i]) {
                    스트라이크++;
                } else if (숫자배열.indexOf(Number(사용자_답_배열[i])) !== -1) { // indexOf() 는 해당 배열에 () 내부의 값이 존재하는지 확인하는 함수, 출력값이 -1이면 존재하지 않는다.
                    볼++;
                }
            }
            // console.log(스트라이크, 볼);
            결과.textContent = 스트라이크 + '스트라이크 ' + 볼 + '볼    '+ '기회가' + (5-not_correct)+'번 남았습니다!';
            입력창.value = '';
            입력창.focus();
        }
    }
});