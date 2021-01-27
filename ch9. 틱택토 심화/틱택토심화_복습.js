var 테이블 =document.createElement('table');
var 바디 = document.body;

var 결과창 = document.querySelector('#result');

var 줄들 = []; // 모든 tr 정보들을 배열로 담을 것
var 칸들 = []; // 모든 td 정보들을 2차원 배열로 담을 것
var 턴 = 'X';

function 검사(줄,칸){
    var 칸검사 =false;
    if (칸들[줄][0].textContent===턴&&
        칸들[줄][1].textContent===턴&&
        칸들[줄][2].textContent===턴){
        칸검사 =true;
    }
    // 2. 세로줄 검사
    if (칸들[0][칸].textContent===턴&&
        칸들[1][칸].textContent===턴&&
        칸들[2][칸].textContent===턴){
        칸검사 =true;
    }
    // 3. 대각선 검사
    if (칸들[0][0].textContent===턴&&
        칸들[1][1].textContent===턴&&
        칸들[2][2].textContent===턴){
        칸검사 =true;
    }
    if (칸들[0][2].textContent===턴&&
        칸들[1][1].textContent===턴&&
        칸들[2][0].textContent===턴){
        칸검사 =true;
    }
    return 칸검사;
}

function 초기화(무승부) {
    if (무승부 === true){
        결과창.textContent='비겼습니다.';
    }else{
        if (턴 === 'X') 결과창.textContent= '사용자님이 이겼습니다.';
        else 결과창.textContent = '컴퓨터가 이겼습니다.';
    }
    setTimeout(function(){
        칸들.forEach(function (줄들) {
            줄들.forEach(function (칸) {
                칸.textContent = '';
            })
        })
    },2000);
}

var 비동기함수 = function 비동기(이벤트){
    결과창.textContent='';
    if (턴 ==='O') return; // 컴퓨터 차례일 때, 유저가 클릭 못하도록 방지
    var 클릭_줄 = 줄들.indexOf(이벤트.currentTarget.parentNode);
    var 클릭_칸 = 칸들[클릭_줄].indexOf(이벤트.currentTarget);
    // console.log(클릭_줄, 클릭_칸);

    if (칸들[클릭_줄][클릭_칸].textContent !==''){//만약 차있다면?
        결과창.textContent='이미 차있는 칸입니다.';
    }else {//만약 차있지 않다면?
        이벤트.currentTarget.textContent = 턴;
        // 검사
        var 검사결과 = 검사(클릭_줄,클릭_칸); // 내가 수를 뒀을때 검사

        var 후보칸 = [];
        칸들.forEach(function (줄){
            줄.forEach(function (칸){
                후보칸.push(칸);
            })
        })
        // 후보칸에서 빈칸 제외 담는다.
        후보칸 = 후보칸.filter(function(element){return !element.textContent;});

        if (검사결과 === true){
            초기화();
        }else if (후보칸.length===0){
            초기화(true);
        }
        else {
            if (턴 ==='X') 턴 ='O';
            setTimeout(function(){
                var 컴퓨터_선택 = 후보칸[Math.floor(Math.random()*후보칸.length)];
                컴퓨터_선택.textContent=턴;
                console.log(컴퓨터_선택);
                var 컴_줄 = 줄들.indexOf(컴퓨터_선택.parentNode);
                var 컴_칸 = 칸들[컴_줄].indexOf(컴퓨터_선택);
                var 칸검사 =검사(컴_줄,컴_칸);
                if (칸검사){
                    초기화();
                }
                // console.log(검사(컴_줄,컴_칸));
                턴='X';
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
        칸들[i].push(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
// console.log (줄들,칸들);
