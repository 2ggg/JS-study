/*
    * 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
    * 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서,
    * 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
    * 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
    * 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
    * 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다.
    * 이때의 지갑 크기는 4000(=80 x 50)입니다.
    *
    * 입출력 예시
    - [[60, 50], [30, 70], [60, 30], [80, 40]] / 결과값 : 4000
    - [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]] / 결과값 : 120
    - [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]] / 결과값 : 133

    * 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
    * 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
    *
    * ==> point. 각 배열 안에 긴 값과 짧은 값끼리를 서로 비교해서 긴 것들 중 가장 긴것, 짧은 것들 중 가장 긴것을 선별.
*/

function solution(sizes) {
  var max = 0;
  var min = 0;
  var bigMax = 0;   //큰 수 중 최대값
  var smallMax = 0; //작은 수 중 최대값

  for(size in sizes){
    var item1 = sizes[size][0];
    var item2 = sizes[size][1];
//  max, min만 써도 가능

//  item1,item2 중 큰 수는 max, 작은 수는 min에 할당
    max = (item1>item2) ? item1:item2;
    min = (item1<=item2) ? item1:item2;

//  Max와 비교 후 큰 값을 할당
    bigMax = (bigMax <= max) ? max : bigMax;
    smallMax = (smallMax <= min) ? min : smallMax;
  }
  console.log(bigMax+'큰거/'+smallMax+'작은거');
  return bigMax*smallMax;
}

let input = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
console.log(solution(input));