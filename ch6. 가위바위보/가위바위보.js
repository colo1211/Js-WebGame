var 결과창 = document.createElement('h3');
var computer = 0;
var 딕셔너리 = { // 딕셔너리 자료구조
  바위 : '0',
  가위 : '-116px',
  보: '-232px',
};
// var 딕셔너리_2 = Object.entries(딕셔너리);
// console.log('딕셔너리반대(2차원 배열):',Object.entries(딕셔너리));
var 점수표 ={
    가위 : -1,
    바위 : 0,
    보: 1,
};

function 컴퓨터의선택(컴퓨터픽셀){

    return Object.entries(딕셔너리).find((v)=>{
        return v[1]===컴퓨터픽셀; //
    })[0];
}

var 인터벌; // 최초 선언

function 인터벌메이킹(){
    인터벌=setInterval(function(){ // 반복되는 간격을 의미한다.
        if (computer === 딕셔너리.바위 ){
            computer = 딕셔너리.가위;
        }else if (computer === 딕셔너리.가위){
            computer = 딕셔너리.보;
        }else {
            computer= 딕셔너리.바위;
        }
        document.querySelector('#computer').style.background =
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY33n--nxoc3YK3XSUCGwc4dJvAlnFMDL8Q&usqp=CAU") '+ computer + ' 0';
    },100);
}

인터벌메이킹(); // 첫화면

// 1. for문
// for (var i =0;i<3;i++) {
//     document.querySelectorAll('.btn')[i].addEventListener('click',function (){
//         console.log(this.textContent);
//     });
// }
// 2. forEach문
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        clearInterval(인터벌); // 버튼을 눌렀을때 잠시동안 인터벌을 멈춘다.
        setTimeout(function (){ //인터벌을 변수에 넣어서 다시 재선언 하게끔 해준다.
            인터벌메이킹();
        },1000);
        var 나의선택 = this.textContent;
        var 컴퓨터_선택 = 컴퓨터의선택(computer);
        console.log('나의 선택: ', 나의선택,'      (컴퓨터의 선택): ',컴퓨터_선택);
        // 결론을 낼 때, 딕셔너리 자료구조를 활용한다.
        if(점수표[나의선택]===점수표[컴퓨터_선택]) 결과창.textContent='비겼습니다.';
        else if (점수표[나의선택]-점수표[컴퓨터_선택]=== -2 || 점수표[나의선택]-점수표[컴퓨터_선택]===1) 결과창.textContent='이김';
        else if (점수표[나의선택]-점수표[컴퓨터_선택]=== -1 || 점수표[나의선택]-점수표[컴퓨터_선택]===-2) 결과창.textContent='졌습니다';
    })
})
document.body.append(결과창);