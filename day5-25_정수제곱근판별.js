/*
* 문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

* 제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.

* 입출력 예
n	  return
121	144
3	  -1

* 입출력 예#1
121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

* 입출력 예#2
3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.
*/

// x가 뭔지 모름
// if(n == x의 제곱){return (x+1)**2;}
// 제곱인지 어떻게 확인하지..
// n == Math.pow(x, i)
// else{return -1;}
// 라고 문제를 고민해봤으나... 답이 나오지 않음
// 제곱근을 너무 오랜만에 맞닥드려서 머릿속으로 계산이 잘 되지 않았다..

/*
function solution(n) {
      console.log(Math.sqrt(n));
    
      for(let x = 0; x <= Math.sqrt(n); x++){
          for(let num = 0; num <= Math.sqrt(n); num++){
              if(n == Math.pow(x, 2)){
                  return (x+1)**2;
              }else{

              }
          }
      }
      return -1;

      이리저리 뭔가 시도해보려다 실패한 흔적...
}
*/

//-------------

// 121의 루트값이 자연수면 x+1의 제곱을 리턴
// 자연수가 없으면 -1 리턴
// 121의 루트값
// 다른분께 도움을 요청드려서...여기서 힌트를 얻어 다시 시도해본 결과

function solution(n) {
    let num = Math.sqrt(n); //n의 제곱근
    return answer = Number.isInteger(num) ? (num+1)**2 : -1;
    //n의 제곱근이 정수인지 아닌지 확인하는 것으로 간단히 끝냄.
}