/*
## 1번. 신대륙 발견

기원이는 오늘 항해99를 시작했다.
성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.

항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

### 제한 조건

* 1 ≤ month ≤ 12
* 1 ≤ day ≤ 31
(2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

* 입출력 예
month   day     result 
11      27      '3월 5일'
6       22      '9월 28일'
1       18      '4월 26일'
*/

function solution(month, day){
	let result = "";

  if(1 <= month <= 12 && 1<= day <= 31){  //제한 사항
    let date = new Date(2023, month-1, day);
    let term = 0;

    if(month >= 11 && day >= 23)  term = 99;
    else  term = 98;
    //2024년은 윤년.
    //윤일을 빼야하기 때문에 2024년 4월 29일이 되는 날짜를 계산하여
    //그 이후 날짜들은 1을 더 추가해서 계산해야 윤일을 제거할 수 있음

    date.setDate(date.getDate()+term);
    //2023. 4. 26. 오전 12:00:00
    console.log(date.toLocaleString()); 
    const arr = date.toLocaleString().split('. ');
    result = `${arr[1]}월`+` ${arr[2]}일`;
  }
	return result;
}

console.log(solution(1,18));
console.log(solution(11,27));
console.log(solution(11,23));
console.log(solution(6,22));