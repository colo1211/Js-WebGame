var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 =[];
var 칸들 = [];
var 턴 = 'X';
var 결과창 = document.querySelector('#result');

function 결과체크(클릭한_줄,클릭한_칸){
    var 모두찼음 = false;
    // 세로줄
    if (칸들[클릭한_줄][0].textContent===턴&&
        칸들[클릭한_줄][1].textContent===턴&&
        칸들[클릭한_줄][2].textContent===턴){
        모두찼음 = true;
    }
    // 가로줄
    if (칸들[0][클릭한_칸].textContent===턴&&
        칸들[1][클릭한_칸].textContent===턴&&
        칸들[2][클릭한_칸].textContent===턴){
        모두찼음=true;
    }
    // 대각선
    if (칸들[0][0].textContent===턴&&
        칸들[1][1].textContent===턴&&
        칸들[2][2].textContent===턴){
        모두찼음 =true;
    }
    if (칸들[0][2].textContent===턴&&
        칸들[1][1].textContent===턴&&
        칸들[2][0].textContent===턴){
        모두찼음 =true;
    }
    return 모두찼음;
}

function 초기화 (무승부){

    if (무승부 === true){ // 비겼을 때
        결과창.textContent='비겼습니다.';
    }
    else { // 이겼을때
        결과창.textContent = 턴 + '님이 이겼음';
    }
    setTimeout(function (){
        칸들.forEach(function (줄들){
            줄들.forEach(function (칸들){
                칸들.textContent='';
            })
        })
    },2000); // 3초 뒤 초기화
}

var 비동기함수 = function 비동기(이벤트){
    // console.log (이벤트.currentTarget);
    // 이벤트.currentTarget 하면 칸 (td)가 뜬다.
    결과창.textContent='';
    // 좌표를 확인하는 연산
    var 클릭한_줄 = 줄들.indexOf(이벤트.currentTarget.parentNode);
    var 클릭한_칸 = 칸들[클릭한_줄].indexOf(이벤트.currentTarget);

    // console.log('내가:',클릭한_줄,클릭한_칸);
    // 만약 칸이 차있다면?
    if (칸들[클릭한_줄][클릭한_칸].textContent !== ''){
        결과창.textContent='이미 채워져 있습니다.';
    }
    // 칸이 비워져 있다면? 1.검사 2.턴 변경
    else {
        이벤트.currentTarget.textContent=턴;
        var 결과 = 결과체크(클릭한_줄,클릭한_칸);
        var 후보군 =[];
        칸들.forEach(function (줄들){
            줄들.forEach(function (칸들){
                후보군.push(칸들);
            });
        });
        후보군 = 후보군.filter(function(v){return !v.textContent}); // 빈 칸만 채운다.
        console.log('후보군',후보군);
        if (결과){ //다 찼다면?
           초기화(); // 초기화 () 로 냅두면 false이다.
        } else if (후보군.length===0){
            초기화(true);
        }else { // 다 안찼다면?
            //2. 턴 교체
            if (턴 === 'X') {
                턴 = 'O';
            }
            setTimeout (function(){
                // 컴퓨터 턴 생성
               var 컴퓨터선택=후보군[Math.floor(Math.random() * 후보군.length)];
               컴퓨터선택.textContent= 턴;
                var 클릭한_줄 = 줄들.indexOf(컴퓨터선택.parentNode);
                var 클릭한_칸 = 칸들[클릭한_줄].indexOf(컴퓨터선택);
                // console.log('컴퓨터 찍은 좌표:',컴_줄,컴_칸);
                var 결과 = 결과체크(클릭한_줄,클릭한_칸);
                if (결과){
                   초기화();
                }
                턴 ='X'; // 검사를 한 후, 턴을 돌려야 하기 때문에 맨 마지막에 턴을 넘긴다.
            },1000);

        }

    }
}


for (var i =0; i<3;i++){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j=0;j<3;j++){
        var 칸 = document.createElement('td');
        칸.addEventListener('click',비동기함수);
        줄.appendChild(칸);
        칸들[i].push(칸); // 2차원 배열로 '칸들' 배열에 td태그 속성을 넣기 위해
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log('줄들',줄들,'칸들',칸들);