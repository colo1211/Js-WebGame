var 후보군 = Array(45).fill().map(function (element,index){
    return index+1;
});
// console.log(후보군);

var 셔플 = []; // 0부터 45까지의 랜덤 숫자를 담는 배열
while(후보군.length>0){
    var temp = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
    셔플.push(temp);
}
console.log(셔플);

var 당첨숫자 = 셔플.slice(0,6);
var 보너스번호 = 셔플[셔플.length-1];

console.log('당첨숫자:',당첨숫자.sort(function (a,b){return a-b;}), '보너스 번호:',보너스번호);

var 폼 = document.createElement('form');
document.body.append(폼);
var 버튼 = document.createElement('button');
버튼.textContent='번호 주세요!';
폼.append(버튼);
var 결과창 = document.getElementById('결과창'); // HTML에 div나 클래스가 있으면 찾아올 수 있다. Element를 id 로 찾는다.

// 당첨숫자 6개를 천천히 출력하기 위한 비동기 반복문, 비동기를 사용할 시 클로져를 사용한다.
// for (var i =0;i<당첨숫자.length;i++){
//     setTimeout(function 콜백함수(){
//         var 공 = document.createElement('div');
//         공.textContent=당첨숫자[i];
//         결과창.appendChild(공);
//     },1000); // setTimeout(function,지연시간)은 비동기 함수로, 시간을 지연할 때 사용 -> 여기서는 1000밀리초(1초)를 대입
// }//반복문 내에 비동기를 사용할 시, 반드시 클로져를 사용해야하지만 우리는 현재 클로져 모르므로 반복문 밖에서 해결.

function 공색칠하기(숫자,출력할곳){
    var 공 = document.createElement('div');
    공.textContent=숫자;
    공.style.display='inline-block'; // 가로로 출력
    공.style.border = '1px solid black';
    공.style.borderRadius ='20px'; //  공을 둥글게, css 에서는 공.style.border-radius라고 하지만 js에서는 -연산자로 인식하기 때문에 -를 제외하고 대문자를 붙인다.
    공.style.textAlign='center';
    공.style.marginRight='10px';
    공.style.fontSize='50px';
    공.id = '공id' + 숫자;
    // 공.class= '공class'+숫자; -> class는 자바스크립트에서 중요한 역할을 하므로 사용 X
    // 공.className = '공class'+숫자; // 따라서, class를 못쓰게 하는 대신 className은 가능하다.
    var 배경색;//빨주노파초
    if (0<=숫자 && 숫자<10){
        배경색='red';
    }else if (10<=숫자 && 숫자<20){
        배경색 ='orange';
    }else if (20<=숫자 && 숫자<30){
        배경색  = 'yellow';
    }else if (30<=숫자 && 숫자<40){
        배경색 = 'blue';
    }else {
        배경색 = 'green';
    }
    공.style.backgroundColor=배경색;
    출력할곳.appendChild(공);
}

폼.addEventListener('submit',function (이벤트){
    이벤트.preventDefault();
    // 당첨번호 6개 추출
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[0],결과창);
    },1000);
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[1],결과창);
    },2000);
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[2],결과창);
    },3000);
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[3],결과창);
    },4000);
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[4],결과창);
    },5000);
    setTimeout(function 콜백함수(){
        공색칠하기(당첨숫자[5],결과창);
    },6000);


//보너스번호 1개 추출
    setTimeout(function 비동기콜백함수(){
        var 칸 = document.getElementsByClassName('보너스결과')[0]; // HTML에서 사용한 class는 여러번 사용 할 수 있기 때문에 하나만 선택하려면 [0]을 입력해준다다
        // var 공 = document.createElement('div');
        // 공.textContent=보너스번호;
        // 공.style.display='inline-block'; // 가로로 출력
        // 공.style.border = '1px solid black';
        // 공.style.borderRadius ='10px'; //  공을 둥글게, css 에서는 공.style.border-radius라고 하지만 js에서는 -연산자로 인식하기 때문에 -를 제외하고 대문자를 붙인다.
        // 공.style.textAlign='center';
        // 칸.appendChild(공);
        공색칠하기(보너스번호,칸);
    },7000);
});
// // 당첨번호 6개 추출
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[0],결과창);
// },1000);
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[1],결과창);
// },2000);
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[2],결과창);
// },3000);
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[3],결과창);
// },4000);
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[4],결과창);
// },5000);
// setTimeout(function 콜백함수(){
//     공색칠하기(당첨숫자[5],결과창);
// },6000);
//
//
// //보너스번호 1개 추출
// setTimeout(function 비동기콜백함수(){
//     var 칸 = document.getElementsByClassName('보너스결과')[0]; // HTML에서 사용한 class는 여러번 사용 할 수 있기 때문에 하나만 선택하려면 [0]을 입력해준다다
//     // var 공 = document.createElement('div');
//     // 공.textContent=보너스번호;
//     // 공.style.display='inline-block'; // 가로로 출력
//     // 공.style.border = '1px solid black';
//     // 공.style.borderRadius ='10px'; //  공을 둥글게, css 에서는 공.style.border-radius라고 하지만 js에서는 -연산자로 인식하기 때문에 -를 제외하고 대문자를 붙인다.
//     // 공.style.textAlign='center';
//     // 칸.appendChild(공);
//     공색칠하기(보너스번호,칸);
// },7000);