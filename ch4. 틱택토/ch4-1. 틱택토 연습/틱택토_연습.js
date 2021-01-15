var 바디 = document.body;
var 제목 = document.createElement('h1')
제목.textContent='틱택토 게임(삼목)';
바디.append(제목);
var 테이블 = document.createElement('table');
var 결과창 = document.createElement('h3');

var 칸들 =[]; // 화면상 보이는 배열과 시뮬레이트, 모든 칸들에 대해서 (9개)
var 줄들 = []; // 화면상 보이는 배열과 시뮬레이트 , 모든 줄들에 대해서 (3개)

var 턴= 'X';

var 콜백 = function 콜백함수(이벤트){
    console.log(이벤트.target); // 클릭 할 시, 콘솔창에 td를 출력해준다. (칸)
    console.log(이벤트.target.parentNode); // 클릭한 Element의 부모노드를 출력해준다. (줄)
    console.log(이벤트.target.parentNode.parentNode); // (테이블)

    var 클릭된_줄= 줄들.indexOf(이벤트.target.parentNode); // 사용자가 클릭한 줄을 var 클릭된_줄 에 저장한다.
    console.log('클릭된_줄:',클릭된_줄);
    var 클릭된_칸= 칸들[클릭된_줄].indexOf(이벤트.target); // 사용자가 클릭한 칸을 var 클릭된 _칸 에 저장한다.
    console.log('클릭된_칸:',클릭된_칸);

    //칸이 이미 채워져 있는가?
    if (칸들[클릭된_줄][클릭된_칸].textContent !== ''){
        console.log('빈칸이 아닙니다.');
    }
    else {
        console.log('빈칸입니다.');
        칸들[클릭된_줄][클릭된_칸].textContent = 턴;
        // 세칸 채워졌는지 확인
        var 모두_채워짐 = false;
        // 가로줄 검사
        if(칸들[클릭된_줄][0].textContent===턴 && 칸들[클릭된_줄][1].textContent === 턴 && 칸들[클릭된_줄][2].textContent===턴 ){
            모두_채워짐 =true;
        }
        // 세로줄 검사
        if( 칸들[0][클릭된_칸].textContent===턴 &&칸들[1][클릭된_칸].textContent===턴 && 칸들[2][클릭된_칸].textContent===턴){
            모두_채워짐 = true;
        }
        // 대각선 검사
        if (클릭된_줄-클릭된_칸===0){
            if(칸들[0][0].textContent===턴 && 칸들[1][1].textContent===턴&&칸들[2][2].textContent===턴){
                모두_채워짐 = true;
            }
        }
        if (Math.abs(클릭된_줄-클릭된_칸)===2){
            if(칸들[0][2].textContent===턴 && 칸들[1][1].textContent===턴&&칸들[2][0].textContent===턴){
                모두_채워짐 = true;
            }
        }
        if (모두_채워짐===true){
            결과창.textContent=턴+'님이 승리하셨습니다 ^^';
            //초기화 코드
            턴 = 'X';
            칸들.forEach(function (줄){
                줄.forEach(function(칸){
                    칸.textContent='';
                });
            });
        }else {
            if (턴 === 'X') 턴 ='O';
            else 턴='X';
        }
    }

    /* 검사코드

    // 세칸 채워졌는지 확인
    var 모두_채워짐 = false;
    // 가로줄 검사
    if(칸들[클릭된_줄][0].textContent===턴 && 칸들[클릭된_줄][1].textContent === 턴 && 칸들[클릭된_줄][2].textContent===턴 ){
        모두_채워짐 =true;
    }
    // 세로줄 검사
    if( 칸들[0][클릭된_칸].textContent===턴 &&칸들[1][클릭된_칸].textContent===턴 && 칸들[2][클릭된_칸].textContent===턴){
        모두_채워짐 = true;
    }
    // 대각선 검사
    if (클릭된_줄-클릭된_칸===0 || Math.abs(클릭된_줄-클릭된_칸)===2){
        if(칸들[0][0].textContent===턴 && 칸들[1][1].textContent===턴&&칸들[2][2].textContent===턴){
            모두_채워짐 = true;
        }
    }
    if (모두_채워짐===true){
        console.log(턴 +'님이 승리 하였습니다.');
    }
    */
};

//화면상에 테이블 생성하기
for (var i = 1; i<=3; i++){
    var 줄 = document.createElement('tr');
    칸들.push([]); // '칸들' 배열에 칸들= [[], [], []]; 로 정의된다.
    줄들.push(줄);
    for(var j=1; j<=3; j++){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 콜백);
        줄.appendChild(칸);
        칸들[i-1].push(칸); //  '칸들' 배열에 칸들= [[td,td,td], [td,td,td], [td,td,td]]; 가 된다.
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
바디.append(결과창);
console.log ('줄들' , 줄들, '칸들', 칸들); // 실제 2차원 배열에 줄들과 칸들이 잘 입력되었는지 확인 하기 위한 출력결과, 클릭시 위치를 알기 위해

