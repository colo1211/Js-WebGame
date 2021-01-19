document.querySelector('#run').addEventListener('click',function (){
    var 가로 = parseInt(document.querySelector('#hor').value);
    var 세로 = parseInt(document.querySelector('#ver').value);
    var 지뢰 = parseInt(document.querySelector('#mine').value);
    console.log(가로,세로,지뢰);
    // 데이터와 화면을 따로 생각하되 둘을 일치시키는 작업
    // 여기서는 현재 데이터를 만드는 작업
    var dataset = [];
    var tbody = document.querySelector('#table tbody');

    for (var i =0; i<세로; i++){
        var arr =[];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j=0; j<가로; j++){
            var td = document.createElement('td');
            arr.push(1);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);
});
