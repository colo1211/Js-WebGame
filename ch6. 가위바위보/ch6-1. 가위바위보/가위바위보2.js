var 결과창 = document.createElement('h3');

var left = 0;
var 딕셔너리 = {
  바위 : 0,
  가위: '-107px',
  보 : '-232px',
};

var 점수표 ={
    가위 : -1,
    바위 : 0,
    보 : 1,
}; // 점수판을 딕셔너리 구조로 생성

function 컴퓨터선택(컴퓨터){
    return Object.entries(딕셔너리).find(function (v){
        return v[1] === 컴퓨터; // 컴퓨터가 낸 픽셀을 가위.바위.보 중 선택해준다.
    })[0];
}
var 인터벌 ;
function 인터벌생성기() {
    인터벌 = setInterval(function () {
        if (left === 0) {
            left = '-107px';
        } else if (left === '-107px') {
            left = '-232px';
        } else if (left === '-232px') {
            left = 0;
        }
        document.querySelector('#computer').style.background
            = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY33n--nxoc3YK3XSUCGwc4dJvAlnFMDL8Q&usqp=CAU") ' + left + ' 0';
    }, 500);
}
인터벌생성기 ();
document.querySelectorAll('.btn').forEach(function (btn){
    btn.addEventListener('click',function 콜백(){
        clearInterval(인터벌); // 한번 클릭 시, 인터벌 해제
        setTimeout(function(){ // setTimeout(); 이후 다시 setInterval();
            인터벌생성기();
        },1000);
        var 나의선택 = this.textContent; //나의 가위 바위 보
        var 컴퓨터의선택= 컴퓨터선택(left); // 컴퓨터의 가위 바위 보
        console.log(나의선택,컴퓨터의선택);
        // #1. 비길 때,
        if (점수표[나의선택]===점수표[컴퓨터의선택]) 결과창.textContent='비겼습니다.';
        // #2. 이길때, -2 혹은 +1
        else if ([-2,1].includes(점수표[나의선택]-점수표[컴퓨터의선택])) 결과창.textContent='이겼습니다.';
        // #3. 졌을때, -1 혹은 +2
        else if ([-1,2].includes(점수표[나의선택]-점수표[컴퓨터의선택])) 결과창.textContent='졌습니다.';
    });
})
document.body.append(결과창);