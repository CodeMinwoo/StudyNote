재할당은 안되지만, 배열이나 객체에 값을 추가하는 것은 가능합니다

# 재할당 불가능

```js
const number = 1;
number = 2;
// TypeError: Assignment to constant variable.

```

# 내용변경 가능

```js
const obj = { key: 'value' };
obj.key = 'newValue'; // 가능

const arr = [1, 2, 3];
arr.push(4); // 가능

```