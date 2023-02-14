/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

예를 들어 strings가 ["sun", "bed", "car"]이고
n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

**제한 조건**

- strings는 길이 1 이상, 50이하인 배열입니다.
- strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
- strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
- 모든 strings의 원소의 길이는 n보다 큽니다.
- 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

**입출력 예 1**
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다.
이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

**입출력 예 2**
"abce"와 "abcd", "cdx"의 2번째 인덱스 값 : "c", "c", "x"
따라서 정렬 후에는 "cdx"가 가장 뒤에 위치
"abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, ["abcd", "abce", "cdx"]

* point => 일단 n번째 글자를 가져와서 단어 앞에 붙이고 내림차순으로 정리한 다음 앞글자만 지우면 됨
* */

let list = ["car", "bed", "sun"];
let arr = [];
let results = [];

const ascending = (list, n) => {
    for(li in list) {
        nth_char = [...list[li][n]].toString(); //n번째 글자 문자열 변환
        str = nth_char + list[li].toString(); //n번째 글자를 해당 단어 앞에 붙임
        arr.push(str); //앞에 붙은 글자를 기준으로 내림차순 해주기 위해 arr에 넣어줌
    }
    arr.sort((a, b) => { //내림차순 후 arr에 재할당
        if(a < b) return 1;
        if(a === b) return 0;
        if(a > b) return -1;
    });
    for(item in arr){ //앞글자를 다시 제거해줌
        let result = arr[item].toString().slice(1);
        results.push(result);
    }
    return results;
}

console.log(ascending(list, 1));