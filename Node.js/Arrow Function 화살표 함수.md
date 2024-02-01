# 화살표 함수의 this

## 일반 함수와 다르게 자신만의 this를 갖지 않습니다 
## 자신을 감싸고 있는 스코프의 this를 가져와 사용합니다
 
### Tip. 화살표함수 부분을 this로 바꾸고 그 this값이 무엇일지 생각합니다

###  Tip. 객체의 메서드로 this를 쓰려면 화살표함수보다는 일반함수를 쓰는게 좋습니다 왜냐하면 화살표 함수는 항상 선언된 위치에서 this를 정하기 때문에 객체 안의 요소에 접근하기가 어렵습니다
```js
const object3 = {

name : '박민우',

main : function(){

console.log(this); // object3 가 출력된다

},

mainArrow : ()=>{

console.log(this) // window 가 출력된다

},

}

  

```

### 함수 안에 inner 화살표 함수가 있는 경우의 this

```js
const object4 = {

name : '박민우',

main : function(){

const innerFunction = function(){

console.log(this); // window 객체가 출력된다

}

innerFunction();

},

}

  

object4.main();

// window 객체가 출력된다

// main 함수를 호출한 객체는 object4이지만 innerFunction은 어떤 객체의 호출로 실행된 것이 아니다 따라서 window이다


const object5 = {

name : '박민우',

main : function(){

const innerFunction = ()=>{

console.log(this); // object5 객체가 출력이 된다

}

innerFunction();

},

}
```
## 화살표 함수는 bind 해줄 자신만의 this를 갖고 있지 않기 때문에 bind()를 쓸 수 없습니다

```js
const object6 = {

name : '박민우',

main : function(){

const innerFunction = function(){

console.log(this)

}.bind({hi : 'hi'}); // this binding

innerFunction();

},

}

  

object6.main();

// 일반 함수의 this 를 고정해줄 때 .bind를 사용하면 된다

  

const object7 = {

name : '박민우',

main : function(){

const innerFunction = (()=>{

console.log(this)

}).bind({hi : 'hi'}); // bind 되지 않는다

innerFunction();

},

}

  

object7.main();
```


### setTimeout 함수 안에 화살표 함수가 있는 경우의 this

```js
const object8 = {

name : '박민우',

main : function(){

setTimeout(function(){

console.log(this) // main함수 실행 컨텍스트 종료 이후에 전역 객체가 호출 하므로 window

},1000)

},

}

object8.main()

  

const object9 = {

name : '박민우',

main : function(){

setTimeout(()=>{

console.log(this) // 화살표함수를 포함하고 있는 main함수 스코프의 this는 object 객체이다

},1000)

},

}

object9.main()
```