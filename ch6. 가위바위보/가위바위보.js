// document.querySelector('#computer').style.background =
//     'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY33n--nxoc3YK3XSUCGwc4dJvAlnFMDL8Q&usqp=CAU") 0 0';
var 결과창 = document.createElement('h3');

var computer = 0;
var 딕셔너리 = { // 딕셔너리 자료구조
  바위 : '0',
  가위 : '-116px',
  보: '-232px',
};
// var 딕셔너리_2 = Object.entries(딕셔너리);

// console.log('딕셔너리반대(2차원 배열):',Object.entries(딕셔너리));

function 컴퓨터의선택(컴퓨터픽셀){

    return Object.entries(딕셔너리).find((v)=>{
        return v[1]===컴퓨터픽셀; //
    })[0];
}

setInterval(function(){ // 반복되는 간격을 의미한다.
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

// 1. for문
// for (var i =0;i<3;i++) {
//     document.querySelectorAll('.btn')[i].addEventListener('click',function (){
//         console.log(this.textContent);
//     });
// }
// 2. forEach문
document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        var 나의선택 = this.textContent;
        var 컴퓨터_선택 = 컴퓨터의선택(computer);
        결과창.textContent='나의 선택: '+ 나의선택+'      (컴퓨터의 선택): '+컴퓨터_선택;
        console.log('나의 선택: ', 나의선택,'      (컴퓨터의 선택): ',컴퓨터_선택);

        if (나의선택==='가위'){
            if (컴퓨터_선택==='가위') 결과창.textContent='비겼습니다.';
            else if (컴퓨터_선택==='바위') 결과창.textContent='졌습니다.';
            else 결과창.textContent='이겼습니다.';
        }else if (나의선택==='바위') {
            if (컴퓨터_선택==='가위') 결과창.textContent='이겼습니다.';
            else if (컴퓨터_선택==='바위') 결과창.textContent='비겼습니다.';
            else 결과창.textContent='졌습니다.';
        }else if (나의선택==='보'){
            if (컴퓨터_선택==='가위') 결과창.textContent='졌습니다.';
            else if (컴퓨터_선택==='바위') 결과창.textContent='이겼습니다.';
            else 결과창.textContent='비겼습니다.';
        }
    })
})
document.body.append(결과창);