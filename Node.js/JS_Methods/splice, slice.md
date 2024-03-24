
![](https://i.imgur.com/K9q5NyM.png)

splice 메소드는 자른 배열을 반환한다

```js
let newName1 = name.split(' ').splice(1,1,lastName)

let newName2 = name.split(' ');

newName2.splice(1,1,lastName);

console.log('새이름',newName1)

console.log('새이름',newName2)
```

split 메소드는 기존 문자열을 바꾸지 않는다. 따라서 새로운 변수에 값을 담아야 하는데 splice 메소드는 새로운 변수에 반환값이 기존 배열이 아니라 자른 배열이다. 따라서 newName1 과 newName2 의 결과값이 다르다.