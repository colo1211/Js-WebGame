var tbody = document.querySelector('#table tbody');
var dataset = [];
document.querySelector('#btn').addEventListener('click',function (){
    tbody.innerHTML='';
    var 가로 = parseInt(document.querySelector('#hor').value);
    var 세로 = parseInt(document.querySelector('#ver').value);
    var 지뢰 = parseInt(document.querySelector('#mine').value);
    console.log(가로,세로,지뢰);

    var 후보군 = Array(가로*세로).fill().map(function (element,index){
        return index;
    })
    // console.log(후보군);
    var 지뢰위치 = [];
    while(후보군.length>((가로*세로)-지뢰)){
        var temp = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
        지뢰위치.push(temp);
    }
    console.log('지뢰위치:',지뢰위치);

    for (var i=0;i<세로;i++){
        var arr=[];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j=0;j<가로;j++){
            var td = document.createElement('td');
            td.addEventListener('contextmenu',function (이벤트){// 마우스 우클릭 이벤트
                var 부모tr= 이벤트.currentTarget.parentNode; // 인자
                var 부모tbody= 이벤트.currentTarget.parentNode.parentNode; // 객체
                var 줄 = Array.prototype.indexOf.call(부모tbody.children,부모tr);
                var 칸 = Array.prototype.indexOf.call(부모tr.children,이벤트.currentTarget);
                console.log('줄:',줄,'칸:',칸);
                if (이벤트.currentTarget.textContent===''||이벤트.currentTarget.textContent==='X'){
                    이벤트.currentTarget.textContent='!';
                }else if (이벤트.currentTarget.textContent==='!'){
                    이벤트.currentTarget.textContent='?';
                }else if (이벤트.currentTarget.textContent==='?'){
                    if (dataset[줄][칸]==='X') 이벤트.currentTarget.textContent='X';
                    else 이벤트.currentTarget.textContent='';
                }
            })
            tr.appendChild(td);
            arr.push(1);
        }
        tbody.appendChild(tr);
    }
    console.log('dataset:',dataset);

    // 지뢰 Map 상에 표기, DataSet에 표기
    for (var i=0;i<지뢰위치.length;i++){
        var 지뢰위치_세로= Math.floor(지뢰위치[i]/10);
        var 지뢰위치_가로= 지뢰위치[i]%10;
        tbody.children[지뢰위치_세로].children[지뢰위치_가로].textContent='X';
        dataset[지뢰위치_세로][지뢰위치_가로]='X';
    }

})