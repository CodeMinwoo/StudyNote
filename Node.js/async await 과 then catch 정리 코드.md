```js
  
async function getData() {
console.log("시작");
const result = await fetch('[https://api.example.com/data](https://api.example.com/data)');
const data = await result.json();
console.log("완료");
return data

console.log("함수 호출 전");
getData();
console.log("함수 호출 후");
```

이 코드의 실행 순서는 다음과 같습니다:

1. "함수 호출 전" 출력
2. getData() 함수 호출 (비동기적으로 실행 시작)
3. "함수 호출 후" 출력
4. getData() 함수 내부에서 "시작" 출력
5. fetch 요청 시작 및 완료 대기
6. fetch 완료 후 "완료" 출력

여기서 볼 수 있듯이, getData() 함수 내부에서는 await을 사용해 동기적으로 보이게 실행되지만, getData() 함수 자체는 비동기적으로 실행됩니다.

## 중요
`getData()`의 결과값을 직접 사용하려면 이 코드를 비동기 함수로 감싸야 합니다. 그 이유는 `getData()`가 Promise를 반환하기 때문입니다.

여기 두 가지 방법으로 이 코드를 수정해 보겠습니다:

```js
async function fetchData() {
    try {
        const data = await getData();
        console.log("받은 데이터:", data);
    } catch (error) {
        console.error("에러 발생:", error);
    }
}

fetchData();

```

```js
getData()
    .then(data => {
        console.log("받은 데이터:", data);
    })
    .catch(error => {
        console.error("에러 발생:", error);
    });

```

두 방법 모두 `getData()`의 비동기 결과를 올바르게 처리합니다.

첫 번째 방법(async/await)은 코드를 더 동기적으로 보이게 만들어 읽기 쉽지만, 이를 위해 새로운 async 함수(`main`)를 만들어야 합니다.

두 번째 방법(then/catch)은 추가적인 함수 없이 직접 Promise를 다룰 수 있지만, 복잡한 비동기 로직의 경우 콜백 지옥(callback hell)에 빠질 위험이 있습니다.

어떤 방식을 선택하든, `getData()`의 비동기 결과를 적절히 처리할 수 있습니다. 보통은 코드의 가독성과 유지보수성을 위해 async/await 방식을 선호하는 경향이 있습니다.

#### getData가 비동기 함수인건 어떻게 알아? .then이 붙어 있어서?

네, `.then()`이 붙어 있는 것을 보고 `getData()` 함수가 비동기 함수라는 것을 알 수 있습니다. 구체적으로 설명하면 다음과 같습니다:

1. **Promise의 존재**: `.then()` 메서드는 Promise 객체에만 존재합니다. `getData()` 함수가 반환하는 값이 Promise 객체라는 것을 알 수 있습니다. Promise 객체는 비동기 작업의 성공 또는 실패를 나타내기 위한 표준 자바스크립트 객체입니다.