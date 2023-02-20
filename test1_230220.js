/*
## 하. 물건을 구매해볼까?

르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다.
편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다.
르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라.
(단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)

* 입출력 예
num     answer
900     1
550     5
320     6
160     8
*/

function solution(num){
	let answer= 0;
  let arr = [500, 100, 50, 10];

  if(10 <= num < 1000){
    let result = 1000 - num;

    while(result >= 0){
      console.log('result: ', result, '/answer: ', answer);
      
      if(result >= 500){
        result -= 500;
      }else if(result >= 100){
        result -= 100;
      }else if(result >= 50){
        result -= 50;
      }else if(result >= 10){
        result -= 10;
      }else{break;}
      answer += 1;
    }
  }

	return answer;
}

let num1 = 160;
console.log('answer: ', solution(num1));
console.log('answer: ', solution(900));
console.log('answer: ', solution(550));
console.log('answer: ', solution(320));