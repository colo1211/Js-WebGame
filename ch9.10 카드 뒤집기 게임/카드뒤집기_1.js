var 가로 =4 ;
var 세로 =3 ;

var 색깔후보군 = ['red','red','green','green','pink','pink','orange','orange', 'blue','blue','purple','purple'];
var 색깔들 = 색깔후보군.slice(); // 1차 게임이 끝나고 2차로 넘어갈 때 다시 넣기 위해 백업용 , 색깔후보군이 변하면 색깔들도 변하는 참조관계, 색깔후보군과의 참조관계를 끊기 위해서 .slice();
var 색깔 =[];

var 클릭카드 =[];
var 완성카드 = [];

var 클릭플래그 = true;

var 시작시간;

function 셔플() {
    while (색깔후보군.length > 0) {
        var temp = 색깔후보군.splice(Math.floor(Math.random() * 색깔후보군.length), 1)[0];
        색깔.push(temp);
    }
}

function 카드세팅(가로, 세로){
    카드플래그 = false;
    for(var i=0;i<가로*세로;i++){
        var card = document.createElement('div');
        card.className= 'card'; // 하나만 추가할 때
        var cardInner = document.createElement('div');
        cardInner.className= 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className='card-back';
        cardBack.style.backgroundColor=색깔[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function 클로저(c) { // 반복문 내에 비동기 이므로 클로저 문제가 발생한다.
            card.addEventListener('click', function () { // 스위치 개념 | add면 remove | remove면 add
                if (카드플래그 === true && !완성카드.includes(c)) { // 카드를 모두 뒤집은 이후에 클릭을 허용
                    c.classList.toggle('flipped');
                    클릭카드.push(c);
                    if (클릭카드.length === 2){
                        // 색깔이 같다면? -> 클릭카드를 비워주고 완성카드에 넣어준다. (이미 성공한 카드를 재클릭 방지)
                        if (클릭카드[0].querySelector('.card-back').style.backgroundColor===
                            클릭카드[1].querySelector('.card-back').style.backgroundColor){
                            완성카드.push(클릭카드[0]);
                            완성카드.push(클릭카드[1]);
                            클릭카드 = [];
                            if (완성카드.length === 12){ // 완성카드 길이가 12면 끝
                                var 종료시간 = new Date();
                                alert('축하합니다!'+ Math.floor((종료시간-시작시간)/1000)+ '초 걸렸습니다.');
                                document.querySelector('#wrapper').innerHTML='';//내부 태그 삭제
                                색깔후보군 = 색깔들.slice();
                                색깔=[];
                                완성카드 = [];
                                시작시간= null; // 시작시간 초기화
                                셔플();
                                카드세팅(가로,세로);
                            }
                        }
                        // 색깔이 다르다면? -> 다시 카드를 뒤집어 준다. 이때, 유저가 도중에 못건들도록 클릭플래그 설치
                        else {
                            카드플래그 = false;
                            setTimeout(function(){
                                클릭카드[0].classList.remove('flipped');
                                클릭카드[1].classList.remove('flipped');
                                클릭카드 =[];
                                카드플래그 = true;
                            },1000);

                        }
                    }
                }
            })
        })(card);

        document.querySelector('#wrapper').appendChild(card);

        // 카드를 순서대로 뒷면으로 뒤집는 코드
        document.querySelectorAll('.card').forEach(function(element,index){
            setTimeout (function (){
                element.classList.add('flipped');
            },1000+(10*index));
        })

        // 카드 전부를 한번에 앞면으로 뒤집는 코드
        document.querySelectorAll('.card').forEach(function(element,index){
            setTimeout (function (){
                element.classList.remove('flipped');
                카드플래그 = true;
                시작시간 = new Date();
                },2000);
        })
    }

}

셔플();
카드세팅(가로,세로);