// 예제에 담긴 프로그래밍 주요 개념

// 1. 원시타입 vs 참조타입
// 2. 선언방식의 기명함수
// 3. 리터럴 방식의 함수표현식
// 4. 삼항 연산자
// 5. 리턴 개념
// 6. 리턴 축약, 명시
// 7. 화살표 함수
// 8. 각종 배열 메서드
// 9. 고차함수(higher order function) ※ closure
// 10. node.js -2 예제 디버깅 연습

// primitive type
let a = 1;
let b = 2;
// reference types
let c = [3, 4, 5];
// sumMapping return type Array
function sumMapping(arr, operand) {
  let temp = arr.map((value) => value + operand);
  // .map() method deep copy
  return temp;
}
// totalValue return type Array
function typeChecker(arr, type) {
  // .filter() method deep copy
  return arr.filter((value) => typeof value === type);
}
// higher order function : outerFunc
function outerFunc(arr, type, operand) {
  type =
    typeof type === "string"
      ? type
      : console.error("arguments[1] parameter must be a string");
  let arrTypeCheckArray = typeChecker(arr, type);
  let tempArray = sumMapping(arrTypeCheckArray, operand);
  let result = tempArray.reduce((prev, curr) => {
    return prev + curr;
  });
  return result;
}
// function call
let test = outerFunc(c, "number", b);
console.log(test);
// 18
