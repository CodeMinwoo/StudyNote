exports와 module.exports 는 동일한 객체를 바라보고 있지만, exports 는 module.exports 를 참조( call by reference ) 하는 형태입니다 따라서 exports = a 의 형태로 코드를 작성하게 되면 module.exports 에 대한 참조가 끊어지게 되어 오류가 발생합니다

### 오류 예시

```js
//test.js

const minwoo = {
	name : "minwoo",
	age : 29
}

exports = minmwoo
```

```js
const user = require(./test);

console.log(user);

// {}  exports 가 제대로 되지 않았기 때문에 빈 객체 {} 가 뜹니다
```


