while(true) { // 답이 yes 일때, 새로운 문제 제출 반복문
    var num1= Math.floor(Math.random()*9)+1;
    var num2= Math.floor(Math.random()*9)+1;
    var correct = num1*num2;
    var 조건 = true;
    while(조건) { // 답이 no 일때 반복하는 반복문
        var my_answer = prompt(String(num1) + '*' + String(num2) + "=?");
        if (correct === Number(my_answer)){
            alert('딩동댕!');
            조건 = false; // 맞았을때 다음 문제 제출을 위한 탈출 조건
        } else {
            alert ('땡!');
        }
    }
}