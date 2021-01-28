var 가로 =4;
var 세로 =3;
var 색깔후보 =['red','red','orange','orange','blue','blue','white','white','yellow','yellow','pink','pink'];
var 색깔 = []; // 색깔후보에서 랜덤으로 색깔배열에 차례대로 넣는다.
var 클릭플래그= true; // 중간에 클릭 못하게 방지

while(색깔후보.length>0){
    색깔.push(색깔후보.splice(Math.floor(Math.random()*색깔후보.length),1)[0]);
}
console.log(색깔);
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
                   if (클릭플래그 === true) {
                       c.classList.toggle('flipped');
                   }
                });
        })(card);
        document.body.appendChild(card);

        document.querySelectorAll('.card').forEach(function (v,i) {
            setTimeout(function(){
                v.classList.add('flipped');
            },1000+(100*i));
        });

        setTimeout(function(){
            document.querySelectorAll('.card').forEach(function (v) {
                v.classList.remove('flipped');
            });
            클릭플래그 = true;
        },5000);


        // setTimeout(function(){},1000+100)
    }
}

카드세팅(가로,세로);

