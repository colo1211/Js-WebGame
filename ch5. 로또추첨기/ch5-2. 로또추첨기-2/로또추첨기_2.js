var 후보군= Array(45).fill().map(function (element,index){
   return index+1;
});
// console.log(후보군);

var 셔플=[]; // 후보군 45개의 숫자를 랜덤하게 섞은 배열

while(후보군.length>0) {
    var temp = 후보군.splice(Math.floor(Math.random() *후보군.length),1)[0];
    셔플.push(temp);
}
// console.log(셔플);

//당첨번호에 정렬하는 함수를 추가
var 당첨번호 = 셔플.slice(0,6).sort(function (a,b){return a-b;}); // 0부터 5까지 총 6개의 숫자를 당첨번호에 담는다.
var 보너스번호 = 셔플.pop();

console.log('당첨번호:',당첨번호,'보너스번호:',보너스번호);

var 결과창 = document.getElementById('결과창');
var 보너스_칸 =document.getElementsByClassName('보너스창')[0];
// 보너스_칸은 class 명, class명은 여러개 중복 가능하므로 getElementByClassName은 반드시 [0]을 붙여주어야한다.

var 버튼 = document.createElement('button');
버튼.textContent='당첨가즈아!';

function 공세팅(숫자,추가원하는태그){
    var 공 = document.createElement('div');
    공.textContent=숫자;
    공.style.display='inline-block';
    공.style.textAlign='center';
    공.style.border='1px solid black';
    공.style.borderRadius='20px';
    공.style.marginRight='10px';
    공.style.fontSize='50px';
    var 공색깔;
    if (0<=숫자 && 숫자<10){
        공색깔 = 'red';
    }else if (숫자<20){
        공색깔='orange';
    }else if (숫자<30){
        공색깔='yellow';
    }else if (숫자<40){
        공색깔='green';
    }else {
        공색깔 ='blue';
    }
    공.style.backgroundColor=공색깔;
    추가원하는태그.append(공);
};

버튼.addEventListener('click',function (이벤트){

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[0],결과창);
    },1000)

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[1],결과창);
    },2000)

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[2],결과창);
    },3000)

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[3],결과창);
    },4000)

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[4],결과창);
    },5000)

    setTimeout(function 콜백함수(){
        공세팅(당첨번호[5],결과창);
    },6000)

    setTimeout(function 콜백함수(){
        공세팅(보너스번호,보너스_칸);
    },7000);
 });
document.body.append(버튼);