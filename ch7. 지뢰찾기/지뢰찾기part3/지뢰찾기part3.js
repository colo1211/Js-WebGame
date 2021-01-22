var tbody = document.querySelector('#table tbody'); // tbody를 전역변수로 설정하기 위해 함수 밖으로 뺀다.
// console.log(tbody);
var dataset = []; // 데이터 셋

document.querySelector('#exec').addEventListener('click',function (){
    tbody.innerHTML=''; // 클릭 할 때, tbody태그 내의 모든 태그의 text를 모두 삭제하는 구문
    dataset = []; // 실행을 누를 때, 데이터 셋 초기화
    var 가로 = parseInt(document.querySelector('#hor').value);
    var 세로 = parseInt(document.querySelector('#ver').value);
    var 지뢰 = parseInt(document.querySelector('#mine').value);
    console.log(가로,세로,지뢰);
    // 데이터와 화면을 따로 생각하되 둘을 일치시키는 작업
    // 여기서는 현재 데이터를 만드는 작업

    var 후보군 = Array(가로*세로).fill().map(function (element,index){
        return index;
    }) // 0부터 99까지

    var 지뢰위치= []; // 지뢰의 위치 랜덤 추출
    while(후보군.length>(100-지뢰)){
        지뢰위치.push(후보군.splice(Math.floor(Math.random()*후보군.length),1)[0]);
    }
    console.log('지뢰위치',지뢰위치);

    // 지뢰 테이블
    for (var i = 0; i< 세로 ; i++){
        var tr = document.createElement('tr');
        var arr = [];
        dataset.push(arr);
        for (var j =0; j<가로;j++){
            arr.push(1);
            var td = document.createElement('td');
            td.addEventListener('contextmenu',function (이벤트){ // 모든 td에 우클릭을 했을 때, contextmenu
                console.log (이벤트.currentTarget); // 우클릭을 한 좌표
                var 부모tr = 이벤트.currentTarget.parentNode; // tr, 클릭된 td가 속한 tr
                var 부모tbody = 이벤트.currentTarget.parentNode.parentNode; // table, 클릭된 td가 속한 table
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 이벤트.currentTarget.parentNode); // 화면상 클릭한 곳의 인덱스를 야매로 인덱스로 알아내는 방법
                // console.log('객체:',부모tbody.children,'인수:', 이벤트.currentTarget.parentNode);
                var 칸 = Array.prototype.indexOf.call(부모tr.children, 이벤트.currentTarget);
                // console.log (이벤트.currentTarget,부모tr,부모tbody);
                // console.log('줄:',줄,'칸:',칸);
                if (이벤트.currentTarget.textContent === '' || 이벤트.currentTarget.textContent ==='X'){
                    이벤트.currentTarget.textContent= '!';
                }else if (이벤트.currentTarget.textContent === '!'){
                    이벤트.currentTarget.textContent= '?';
                }else if (이벤트.currentTarget.textContent === '?'){ // ?에서 우클릭을 할 때 검사 시도
                    이벤트.currentTarget.textContent= '';
                    if (dataset[줄][칸]===1){
                        이벤트.currentTarget.textContent='';
                    }else if (dataset[줄][칸]==='X'){
                        이벤트.currentTarget.textContent='X';
                    }
                }
            }) //우클릭 , !?
            td.addEventListener('click',function(이벤트){ //좌클릭 , 펑 or 주변 지뢰 갯수
                var 부모tr = 이벤트.currentTarget.parentNode; // tr, 클릭된 td가 속한 tr
                var 부모tbody = 이벤트.currentTarget.parentNode.parentNode; // table, 클릭된 td가 속한 table
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 이벤트.currentTarget.parentNode); // 화면상 클릭한 곳의 인덱스를 야매로 인덱스로 알아내는 방법
                // console.log('객체:',부모tbody.children,'인수:', 이벤트.currentTarget.parentNode);
                var 칸 = Array.prototype.indexOf.call(부모tr.children, 이벤트.currentTarget);

                이벤트.currentTarget.classList.toggle('opened');

                if (dataset[줄][칸]==='X'){ // 지뢰일 경우
                    이벤트.currentTarget.textContent='펑';
                }else{ // 지뢰가 아닐 경우
                    var 주변상황 = [dataset[줄][칸-1],dataset[줄][칸+1]]; // 위의 3개의 칸, 아래의 3개의 칸은 조건에 따라서 추가한다. (by. concat, push)

                    if(dataset[줄-1]!==undefined){ // 위가 존재한다면,
                        주변상황 = 주변상황.concat(dataset[줄-1][칸-1],dataset[줄-1][칸],dataset[줄-1][칸+1]);
                    }
                    if(dataset[줄+1]!==undefined) { // 아래가 존재한다면,
                        주변상황 = 주변상황.concat(dataset[줄 + 1][칸 - 1], dataset[줄 + 1][칸], dataset[줄 + 1][칸 + 1]);
                    }
                    var 주변지뢰개수= 주변상황.filter(function (v){
                        return v==='X';
                    }).length;
                    이벤트.currentTarget.textContent= 주변지뢰개수;
                    // 주변 지뢰 개수 0일 때, 주변의 8칸을 동시에 오픈한다. 재귀함수 사용
                    if (주변지뢰개수 === 0){
                        var 주변칸 = [];
                        if (tbody)
                    }

                }
            }) // 좌클릭시 펑 or 주변 개수
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    for (var x=0;x<지뢰위치.length;x++){ // 0부터 20까지 ex) 60
        var 지뢰_세로 = Math.floor(지뢰위치[x]/10) ; // ex) 세로:6
        var 지뢰_가로 = (지뢰위치[x]%10); // ex) 가로:0
        // console.log('지뢰세로:',지뢰_세로,' 지뢰가로:',지뢰_가로);
        tbody.children[지뢰_세로].children[지뢰_가로].textContent='X'; //children으로 자식 태그들에게 접근한다. 화면
        dataset[지뢰_세로][지뢰_가로]='X'; // 데이터
    }

});

