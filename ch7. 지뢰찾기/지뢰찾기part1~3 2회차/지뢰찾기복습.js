var dataset = [];
var tbody = document.querySelector('#table tbody');
var 중단플래그 = false; // 게임 실패를 알리기 위해
var 열은칸=0; // 게임 성공을 알리기 위해

// var 코드표 ={
//     연칸 : -1,
//     물음표 : -2,
//     깃발 : -3,
//     깃발지뢰 :-4,
//     물음표지뢰:-5,
//     지뢰 :1,
//     보통칸: 0 ,
// };

document.querySelector('#btn').addEventListener('click',function(){
    tbody.innerHTML=''; // tbody의 내부 태그들을 모두 삭제
    dataset=[]; // dataset의 내부 데이터를 모두 삭제
    document.querySelector('#result').textContent=' ';
    열은칸=0;
    중단플래그=false;
    var 가로= parseInt(document.querySelector('#hor').value);
    var 세로= parseInt(document.querySelector('#ver').value);
    var 지뢰= parseInt(document.querySelector('#mine').value);
    // console.log(가로,세로,지뢰);

    // 지뢰의 위치를 랜덤하게 뽑아준다.
    var 후보군 = Array(가로*세로).fill().map(function (element,index){return index})
    var 셔플 =[];
    while(후보군.length>(100-지뢰)){
        var temp = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
        셔플.push(temp);
    }
    // console.log(셔플);
    //


    // tbody 내에 테이블 생성
    for (var i=0; i<세로; i++){
        var tr = document.createElement('tr');
        var arr= [];
        dataset.push(arr);
        for (var j=0;j<가로;j++){
            var td = document.createElement('td');

            arr.push(0);
            //우클릭
            td.addEventListener('contextmenu',function (e){
                if (중단플래그 === true) return ;
                e.preventDefault();
                부모tr=e.currentTarget.parentNode;
                부모tbody=e.currentTarget.parentNode.parentNode;
                var 줄 = Array.prototype.indexOf.call(부모tbody.children,부모tr);
                var 칸 = Array.prototype.indexOf.call(부모tr.children,e.currentTarget);

                if (e.currentTarget.textContent==='' || e.currentTarget.textContent==='X'){
                    e.currentTarget.textContent='!';
                }else if (e.currentTarget.textContent==='!'){
                    e.currentTarget.textContent='?';
                }else if (e.currentTarget.textContent==='?'){
                    if (dataset[줄][칸]==='X'){
                        e.currentTarget.textContent='X';
                    }else{
                        e.currentTarget.textContent=' ';
                    }
                }
            })
            //좌클릭
            td.addEventListener('click',function(e){
                if (중단플래그 === true) return;
                // e.preventDefault();
                부모tr=e.currentTarget.parentNode;
                부모tbody=e.currentTarget.parentNode.parentNode;
                var 줄 = Array.prototype.indexOf.call(부모tbody.children,부모tr);
                var 칸 = Array.prototype.indexOf.call(부모tr.children,e.currentTarget);

                // 동일한 칸을 클릭했을때, 카운트 안되게 막아줌
                if (dataset[줄][칸]===1) return;

                //열었을 때, 하얀색 배경
                e.currentTarget.classList.add('open');
                열은칸+=1;

                if (dataset[줄][칸]==='X'){ // 클릭했을때 지뢰일때
                    e.currentTarget.textContent='펑';
                    document.querySelector('#result').textContent='실패';
                    중단플래그 = true; // 게임 종료
                }else { // 클릭했을때 지뢰 아닐 때, 주변의 지뢰 개수를 카운트
                    dataset[줄][칸]=1; // 열은 칸을 1로 변경
                    var 주변지뢰 = [dataset[줄][칸-1],dataset[줄][칸+1]];
                    if (dataset[줄-1]){ // 줄-1이 undefined가 아닐 때, 칸이 있을 때 합체!
                        주변지뢰 = 주변지뢰.concat(dataset[줄-1][칸-1],dataset[줄-1][칸],dataset[줄-1][칸+1]);
                    }
                    if (dataset[줄+1]){ // 줄+1이 undefined가 아닐 때, 칸이 있을 때 합체!
                        주변지뢰= 주변지뢰.concat(dataset[줄+1][칸-1],dataset[줄+1][칸],dataset[줄+1][칸+1]);
                    }
                    var 주변지뢰개수 =주변지뢰.filter(function(element){
                        return element === 'X';
                    }).length;
                    e.currentTarget.textContent=주변지뢰개수 || '';
                    // 거짓인 값들('',0,NaN,null,undefined,false)을 ''로 대신 출력하라는 의미
                    // 조건문을 생략 할 수 있다.

                    if (주변지뢰개수 === 0){
                        // console.log('주변을 엽니다.');
                        var 주변칸 =[];
                        if (tbody.children[줄-1]){
                            주변칸 = 주변칸.concat(tbody.children[줄-1].children[칸-1],
                                                 tbody.children[줄-1].children[칸],
                                                 tbody.children[줄-1].children[칸+1]);
                        }
                        주변칸= 주변칸.concat(tbody.children[줄].children[칸-1], tbody.children[줄].children[칸+1]);
                        if (tbody.children[줄+1]) {
                            주변칸 = 주변칸.concat(tbody.children[줄+1].children[칸-1],
                                                tbody.children[줄+1].children[칸],
                                                tbody.children[줄+1].children[칸+1]);
                        }
                        // Undefined 제거
                        // console.log('제거 전',주변칸);
                        제거=주변칸.filter(function(v){
                            return !!v;
                        })
                        제거.forEach(function (v){
                            // 열었던 칸을 다시 재귀로 안열게끔 방지하는 코드
                            var 부모tr = v.parentNode;
                            var 부모tbody= v.parentNode.parentNode;
                            var 옆칸줄 = Array.prototype.indexOf.call(부모tbody.children,부모tr);
                            var 옆칸칸 = Array.prototype.indexOf.call(부모tr.children,v);
                            if (dataset[옆칸줄][옆칸칸]!==1){
                                v.click(); // 재귀
                            }
                            });
                        // console.log('제거 후',주변칸);
                    }

                }

                // 가로 세로 지뢰 변수가 제대로 동작하지 않아서 다시 선언했음
                var 가 = Number(document.querySelector('#hor').value);
                var 세 = Number(document.querySelector('#ver').value);
                var 지 = Number(document.querySelector('#mine').value);
                console.log (열은칸, 가*세-지 );
                if (열은칸 === 가 * 세 - 지){
                    중단플래그 = true;
                    document.querySelector('#result').textContent='승리';
                }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var x=0;x<셔플.length;x++){
        var 세로= Math.floor(셔플[x]/10);
        var 가로= (셔플[x]%10);
        tbody.children[세로].children[가로].textContent= 'X'; // 화면
        dataset[세로][가로]='X'; // 데이타셋
    }

});
