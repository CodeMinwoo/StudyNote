# 일반적인경우
#### 함수의 실행을 중단하고, 함수를 호출한 곳으로 제어를 반환합니다

* for
* for of
* for in

# map 메소드

#### 'map' 함수의 콜백 내에서 'return'을 사용하는 것은 각 요소에 대한 새로운 값으로 해석됩니다 'map'함수는 return을 사용하여 새 배열의 각 요소를 결정하기 때문에 return을 필수로 써야 합니다


```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => {
  return number * 2; // 각 요소를 두 배로 만들어 반환
});
console.log(doubled); // [2, 4, 6, 8, 10]

```

# forEach 메소드

#### 'forEach' 의 콜백 함수 내에서 'return' 을 사용하는 경우 해당 콜백함수의 실행을 끝내고 다음 요소로 넘어갑니다. forEach 루프 자체를 중단시키지 않고 , 단지 현재 반복을 종료할 뿐입니다

