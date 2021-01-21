// #1. 비동기 + 반복문
// for(var i=0;i<10;i++){
//     setTimeout(function (){
//         console.log(i);
//     },i*1000);
// }

// #2. #1에서 JS가 이해하는 코드
// setTimeout(function (){
//     console.log(i);
// },0);
//
// setTimeout(function (){
//     console.log(i);
// },1000);
//
// setTimeout(function (){
//     console.log(i);
// },2000);
//
// setTimeout(function (){
//     console.log(i);
// },3000);
//
// setTimeout(function (){
//     console.log(i);
// },4000);
// // ----
//     setTimeout(function (){
//     console.log(i);
// },99000);

// //#3. 함수의 매개변수를 활용하여 클로저 문제를 해결
// for (var i=0;i<100;i++){
//     function 클로저(x) {
//         setTimeout(function () {
//             console.log(x,'초');
//         }, x * 1000);
//     }
//     클로저(i);
// }

//#4. 실제 JS가 이해하는 코드
// 매개변수 x가 전달 되는 것은 함수 내에 var x=0; 과 동일하다.
// function 클로저(x) {
//     setTimeout(function(){
//         console.log(x);
//     },x*1000);
// }
// 클로저(0);
//
// function 클로저(x) {
//     setTimeout(function(){
//         console.log(x);
//     },x*1000);
// }
// 클로저(1);
//
// function 클로저(x) {
//     setTimeout(function(){
//         console.log(x);
//     },x*1000);
// }
// 클로저(2);
//
// function 클로저(x) {
//     setTimeout(function(){
//         console.log(x);
//     },x*3000);
// }
// 클로저(3);
//
// function 클로저(x) {
//     setTimeout(function(){
//         console.log(x);
//     },x*4000);
// }
// 클로저(4);



// #5.#3의 즉시 실행 코드
for (var i =0;i<100;i++){
    (function 클로저(x){
        setTimeout(function (){
            console.log(x);
        },x*1000);
    })(i);
}