/*
## 3번. 소수의 개수와 덧셈 (상)

### **문제 설명**

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아
이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

---

### 제한사항

- s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
- 문자열에는 소수가 한개 이상 섞여 있습니다.
- 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
- 음수는 없습니다.

* 입출력 예시
s                       result
“2 3 4 5”               “4 5”
"15 3 10 9 7 8"         “8 7”
“97 75 88 99 95 92 73”  “75 97”
*/

//소수 아닌 최소값
//소수인 최대값
function solution(s){
	let answer = "";
  let no = [];  //소수 아닌 값들
  let yes = []; //소수인 값들
  let arr = s.split(' ').map(value => Number(value));

  for(index in arr){
    let value = Number(arr[index]);

    for(let i = 2; i < value; i++){ //소수인지 판별하기 위해 value 자신은 뺌
      if(value % i == 0){ //소수가 아니면 break;
        no.push(value);
        console.log(value, "소수 아님");
        break;
      }
    }
  }
  yes = arr.filter(value => !no.includes(value)).sort(); //소수인 배열
  no.sort((a,b) => b-a);
  answer = `${no.pop()} ${yes.pop()}`; //최소, 최대값 뽑아내기
  
	return answer;
}

let s = "15 3 10 9 7 8";

console.log(solution(s));