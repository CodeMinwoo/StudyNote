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

### 실행 과정 상세 설명

1. **`fetchData` 함수 호출**:
    
    - `fetchData` 함수가 호출됩니다. 이는 호출 스택에 추가됩니다.
2. **`getData` 함수 호출**:
    
    - `await getData()` 구문이 실행되면서, `getData` 함수가 호출됩니다.
    - `getData` 함수는 비동기 작업을 수행하고, Promise를 반환합니다.
    - `await` 키워드 때문에 `fetchData` 함수는 일시적으로 멈추고, 제어권을 호출 스택의 다음 코드로 넘깁니다.
3. **백그라운드 작업**:
    
    - `getData` 함수는 비동기 작업을 백그라운드에서 수행합니다. 이 작업은 예를 들어 네트워크 요청, 파일 읽기, 타이머 등을 포함할 수 있습니다.
4. **비동기 작업 완료**:
    
    - `getData` 함수의 비동기 작업이 완료되면, 해당 Promise가 해결(resolved)되거나 거부(rejected)됩니다.
    - 해결되면, `then` 블록에 정의된 작업이 이벤트 큐에 추가됩니다.
    - 거부되면, `catch` 블록에 정의된 작업이 이벤트 큐에 추가됩니다.
5. **이벤트 큐와 이벤트 루프**:
    
    - 메인 스레드의 호출 스택이 비어 있는 상태에서, 이벤트 루프가 이벤트 큐를 확인합니다.
    - 이벤트 큐에 있는 작업이 호출 스택으로 이동합니다.
6. **Promise가 해결된 경우**:
    
    - `await` 표현식이 `getData` 함수의 결과를 반환합니다.
    - `fetchData` 함수의 실행이 재개됩니다.
    - `const data = await getData();`가 완료되고, `data` 변수에 결과가 할당됩니다.
    - `console.log("받은 데이터:", data);`가 호출 스택에 추가되어 실행됩니다.
7. **Promise가 거부된 경우**:
    
    - `await` 표현식이 에러를 던집니다.
    - `fetchData` 함수의 `try` 블록이 종료되고, `catch` 블록이 호출 스택에 추가되어 실행됩니다.
    - `console.error("에러 발생:", error);`가 실행됩니다.

### 요약

`fetchData` 함수가 `await getData()`를 만나는 시점에서, `fetchData`는 일시 중단되고, `getData` 함수의 비동기 작업이 백그라운드에서 실행됩니다. 비동기 작업이 완료되면, 그 결과가 이벤트 큐에 등록되고, 이벤트 루프에 의해 호출 스택에 추가되어 실행됩니다. 이 과정에서 메인 스레드는 다른 작업을 계속 수행할 수 있습니다.