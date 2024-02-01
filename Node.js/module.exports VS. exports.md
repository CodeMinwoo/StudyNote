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


# module.exports 

하나의 값 또는 하나의 객체만을 내보낼 수 있습니다

예시

```js

const myValue = 'This is a single value';

module.exports = myValue;

```

```js

const value1 = 'This is value 1';
const value2 = 'This is value 2';

module.exports = {
  prop1: value1,
  prop2: value2
};


```

# exports. 
여러개의 값을 내보낼 수 있습니다

예시

```js
// exampleModule.js
exports.object1 = { key1: 'value1' };
exports.object2 = { key2: 'value2' };


const myModule = require('./exampleModule');
console.log(myModule.object1); // { key1: 'value1' }
console.log(myModule.object2); // { key2: 'value2' }

```

