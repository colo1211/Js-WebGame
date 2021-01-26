var 바디 = document.body;
var 테이블 = document.createElement('table');

var 제목= document.createElement('h1');
제목.textContent='틱택토게임';
바디.append(제목);
var 결과창 = document.createElement('h2');

var 칸들 = [];
var 줄들 = [];

var 턴 ='X';

var 비동기_함수 =function (이벤트){
    var 클릭된_줄 = 줄들.indexOf(이벤트.target.parentNode);
    var 클릭된_칸 = 칸들[클릭된_줄].indexOf(이벤트.target);
    // console.log(클릭된_줄,클릭된_칸);

    //채워져 있는지 확인
    if (칸들[클릭된_줄][클릭된_칸].textContent!==''){ // 클릭한 칸이 빈칸이 아니라면
        console.log('이미 채워져 있습니다.');
    }
    else { // 클릭한 칸이 빈칸이라면
        칸들[클릭된_줄][클릭된_칸].textContent = 턴;
        // 칸이 3개 다 채워져 있는지 검사
        var 모두_참 = false;
        // 1. 세로줄
        if (칸들[0][클릭된_칸].textContent === 턴 && 칸들[1][클릭된_칸].textContent === 턴 && 칸들[2][클릭된_칸].textContent === 턴) {
            모두_참 = true;
        }
        // 2. 가로줄
        if (칸들[클릭된_줄][0].textContent === 턴 && 칸들[클릭된_줄][1].textContent === 턴 && 칸들[클릭된_줄][2].textContent === 턴) {
            모두_참 = true;
        }
        // 3. 대각선
        if (클릭된_줄 - 클릭된_칸 === 0) {
            if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
                모두_참 = true;
            }
        }
        if (Math.abs(클릭된_줄 - 클릭된_칸) === 2) {
            if (칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[0][2].textContent) {
                모두_참 = true;
            }
        }

        if (모두_참 === true) {
            결과창.textContent = 턴 + '님이 이겼음';
            //초기화 코드
            턴 = 'X';
            칸들.forEach(function (줄들) {
                줄들.forEach(function (칸들) {
                    칸들.textContent = '';
                })
            });
        } else {
            if (턴 === 'X') {
                턴 = 'O';
            } else {
                턴 = 'X';
            }
        }
    }

};

for (var i =0; i<3;i++){
    var 줄 = document.createElement('tr');
    칸들.push([]);
    줄들.push(줄);
    for(var j=0;j<3;j++){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기_함수);
        줄.appendChild(칸);
        칸들[i].push(칸);
    }
    테이블.appendChild(줄);
}
바디.append(테이블);
바디.append(결과창);
console.log('칸들',칸들, '줄들',줄들);
