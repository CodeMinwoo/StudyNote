
### 주어진 함수를 주어진 iterable(반복 가능한 객체) 의 모든 항목에 적용하여 새로운 iterable 을 생성하는 역할을 합니다

** 자바스크립트의 .map() 함수도 배열의 각 요소에 주어진 함수를 적용해 새로운 배열을 생성하는 비슷한 개념입니다

```
numbers = ['1', '2', '3', '4', '5']

result = list(map(int, numbers))  #함수 자체를 전달해야 하니까 int() 는 안됩니다

print(result)

# 출력: [1, 2, 3, 4, 5]

```