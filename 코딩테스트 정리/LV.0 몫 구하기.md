자바스크립트에서는 정수와 정수를 나누면 항상 정수가 나오는 것이 아니라, 소수점 이하의 값을 포함하는 결과가 나올 수 있습니다. 자바스크립트의 나누기 연산(`/`)은 부동소수점 연산을 사용하기 때문에, 정수 / 정수의 결과가 정수일 수도 있고 아닐 수도 있습니다.

자바스크립트에서 정수 나눗셈의 몫을 구하려면, `Math.floor()` 또는 `Math.trunc()` 함수를 사용할 수 있습니다. 이 함수들은 소수점 이하의 값을 버리고 정수 부분만 반환합니다.

### 예시:

1. `Math.floor()`: 음수 값일 때는 더 작은 정수로 내림
    

javascript

```
let dividend = 9;
let divisor = 2;
let quotient = Math.floor(dividend / divisor);
console.log(quotient); // 출력: 4
```

1. `Math.trunc()`: 소수점 이하를 단순히 잘라내기, 양수와 음수 모두 동일하게 처리
    

javascript

```
let dividend = 9;
let divisor = 2;
let quotient = Math.trunc(dividend / divisor);
console.log(quotient); 
```