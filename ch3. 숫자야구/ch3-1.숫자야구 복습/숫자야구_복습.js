var 바디= document.body;

var 숫자범위;
var 출력숫자;

function 숫자뽑기(){
    숫자범위 = [1,2,3,4,5,6,7,8,9];
    출력숫자 = [];
    for (var i=0;i<4;i++){
        var new_num = 숫자범위.splice(Math.floor(Math.random()*(9-i)),1)[0];
        출력숫자.push(new_num);
    }
}

숫자뽑기(); // 첫 숫자 뽑기

var 바디= document.body;
var 게임_제목 = document.createElement('h1');
게임_제목.textContent='숫자야구게임 기회는 5번';
바디.append(게임_제목);

var 폼 = document.createElement('form');
바디.append(폼);

var 입력창 = document.createElement('input');
입력창.maxLength=4; // 최대 숫자 4개
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent='타격';
폼.append(버튼);

var 결과창 = document.createElement('h3');
바디.append(결과창);

var 실패횟수=1;

폼.addEventListener('submit',function callback(situation){
    situation.preventDefault();
    console.log('정답:', 출력숫자);
    var 사용자_입력 = 입력창.value; //여기서 입력창.value는 문자열, 출력숫자는 배열
    console.log('사용자 입력', 사용자_입력);
    // 한번에 모두 맞출 경우
    if (사용자_입력 === 출력숫자.join('')){
        결과창.textContent='홈런';
        입력창.value='';
        입력창.focus();
        실패횟수 = 0;
        숫자뽑기();
    }
    // 한번에 못 맞출 경우
    else{
        if (실패횟수>=5){ // 실패횟수 5번 초과
            결과창.textContent='제한된 횟수를 모두 사용, 답은'+ 출력숫자.join('')+'입니다.';
            입력창.value='';
            입력창.focus();
            실패횟수 = 0;
        }
        else { // 실패횟수 5번 이하, 스트라이크/볼 카운트
            실패횟수++;
            var 스트라이크 = 0;
            var 볼 = 0;
            for (var i=0; i<4;i++){
                if (출력숫자[i]=== Number(사용자_입력.split('')[i])){
                    스트라이크++;
                }else if (출력숫자.indexOf(Number(사용자_입력[i]))!==-1){
                    볼++;
                }
            }
            결과창.textContent='스트라이크: ' + 스트라이크 +', 볼:'+볼+', 남은 기회:'+ (6-실패횟수);
            입력창.value='';
            입력창.focus();
        }
    }
});