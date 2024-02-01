
# 기본적인 export (named export)

```js
// test.js
export const plus = (a,b)=> a + b ;
export const minus = (a,b)=> a - b ;
export const divide = (a,b)=> a / b ;


import { plus minus , divide }
import { plus as add } from './test'
```

중괄호 { }로 가져오고 이름을 바꿀 수 없습니다 

# export default

```js
// test.js
const plus = (a,b)=> a + b ;
const minus = (a,b)=> a - b ;
const divide = (a,b)=> a / b ;

export default { plus, minus ,divide }

import myMath from './test'
myMath.plus(2,2);
```

중괄호가 필요없고 원하는 이름으로 import 할 수 있습니다
** 파일에서 하나만 export default 할 수 있습니다


# 여러개의 export 한번에 모두 가져오기

```js
// math.js
const plus = (a,b)=> a + b ;
const minus = (a,b)=> a - b ;
const divide = (a,b)=> a / b ;

import * as myMath from './math';
```


# export 와 export default 모두 사용

```js
// test.js
const connectToDB = ()=>{ something };
export const getURL = ()=>{ something2 };

export default coonectToDB;

import connect, { getURL } from "./test"
```

# Dynamic import

예시

```js
function doMath(){
	import("./math")
	.then(math=>math.plus(2,2));
}
btn.addEventListener("click",doMath);
```