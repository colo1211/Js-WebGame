var 가로 =4;
var 세로 =3;
var 클릭플래그= true; // 중간에 클릭 못하게 방지
var 클릭카드 = [];
var 완성카드 =[];

// 색깔 랜덤으로 섞기
var 색깔후보 =['red','red','orange','orange','blue','blue','aqua','aqua','yellow','yellow','pink','pink'];
var 색깔 = []; // 색깔후보에서 랜덤으로 색깔배열에 차례대로 넣는다.

while(색깔후보.length>0){
    색깔.push(색깔후보.splice(Math.floor(Math.random()*색깔후보.length),1)[0]);
}
//

function 카드세팅(가로, 세로){
    클릭플래그 = false;
    for (var i = 0; i<가로*세로;i++) {
        var card = document.createElement('div');
        card.className = 'card';  // 1. 하나만 추가할 때 쓰는 명령어 | 2. card.classList.add('card'); 여러개를 추가할 때 쓰는 명령어
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = 색깔[i]; // 색깔에서 차례대로 카드의 색에 대입한다.
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function 클로저(c) {
                c.addEventListener('click', function () {
                   if (클릭플래그 === true&& !완성카드.includes(c)) {//클릭플래그 true이고 완성카드 내에 없을 때만
                       c.classList.toggle('flipped');
                       클릭카드.push(c); // 클릭카드에 2개를 넣어준다.
                       if (클릭카드.length===2 ){ // 2개 일 때
                           // 같다면
                           if (클릭카드[0].querySelector('.card-back').style.backgroundColor===
                               클릭카드[1].querySelector('.card-back').style.backgroundColor){//클릭한 카드 2개가 동일하다면?
                               완성카드.push(클릭카드[0]);
                               완성카드.push(클릭카드[1]);
                               클릭카드 = [];
                           }
                           // 다르다면 다시 뒤집기
                           else {
                               클릭플래그 = false;
                               setTimeout(function(){
                                   클릭카드[0].classList.remove('flipped');
                                   클릭카드[1].classList.remove('flipped');
                                   클릭카드 = [];
                                   클릭플래그 = true;
                                   },1000);
                           }
                       }
                   }
                });
        })(card);
        document.body.appendChild(card);

        // 카드를 게임 시작전에 순서대로 잠시동안 보여주는 코드
        document.querySelectorAll('.card').forEach(function (v,i) {
            setTimeout(function(){
                v.classList.add('flipped');
            },(10*i));
        });

        // 게임 시작을 위해서 카드를 다시 뒤집는 코드
        setTimeout(function(){
            document.querySelectorAll('.card').forEach(function (v) {
                v.classList.remove('flipped');
            });
            클릭플래그 = true;
        },2000);

    }
}

카드세팅(가로,세로);

