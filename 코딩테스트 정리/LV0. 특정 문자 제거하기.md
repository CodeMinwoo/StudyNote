# split(letter)

 JavaScript에서 `split(letter)`을 사용하면 `letter`에 해당하는 문자를 기준으로 문자열을 나누고, 그 문자는 결과 배열에서 제거됩니다.

### 예제

```js
const str = "apple,banana,grape";
const result = str.split(",");
console.log(result);
```

**출력**

```js
["apple", "banana", "grape"]
```

`,`를 기준으로 나누면서 `,` 자체는 결과 배열에서 사라집니다.

### 다른 예제

```js
const str2 = "hello world";
const result2 = str2.split("o");
console.log(result2);
```

**출력**

```js
["hell", " w", "rld"]
```

`"o"`를 기준으로 문자열이 분리되고 `"o"` 자체는 결과에서 빠집니다.

### 빈 문자열(`""`)을 기준으로 나누면?

```js
const str3 = "hello";
const result3 = str3.split("");
console.log(result3);
```

**출력**

```js
["h", "e", "l", "l", "o"]
```

이렇게 하면 모든 문자가 개별 요소로 분리됩니다.

혹시 원하는 동작과 다르다면, 추가 질문 주세요! 😊

# replaceAll

### `replaceAll()` 메서드

JavaScript에서 `replaceAll()` 메서드는 문자열에서 특정 문자 또는 문자열을 **모두** 찾아서 다른 문자열로 바꿀 때 사용합니다.

### **기본 문법**

```js
string.replaceAll(searchValue, replaceValue);
```

- `searchValue` : 찾을 문자열 (문자 또는 정규식)
- `replaceValue` : 바꿀 문자열

---

## ✅ **예제 1: 특정 문자 바꾸기**

```js
const str = "apple, banana, apple, grape";
const result = str.replaceAll("apple", "orange");
console.log(result);
```

**출력**

```js
"orange, banana, orange, grape"
```

모든 `"apple"`이 `"orange"`로 변경되었습니다.

---

## ✅ **예제 2: 공백 제거하기**

```js
const sentence = "hello world, hello JavaScript";
const result = sentence.replaceAll(" ", ""); // 공백 제거
console.log(result);
```

**출력**

```js
"helloworld,helloJavaScript"
```

모든 공백이 제거되었습니다.

---

## ✅ **예제 3: 정규식을 사용한 변경**

`replaceAll()`은 **문자열**뿐만 아니라 **정규식 (RegExp) 객체**도 사용할 수 있습니다.

```js
const text = "I like JavaScript. JavaScript is powerful!";
const newText = text.replaceAll(/JavaScript/g, "TypeScript");
console.log(newText);
```

**출력**

```js
"I like TypeScript. TypeScript is powerful!"
```

여기서 `/JavaScript/g` 정규식은 `"JavaScript"`를 **대소문자 구분하며** 찾고, 모두 `"TypeScript"`로 변경합니다.

---

## ✅ **예제 4: 대소문자 구분 없이 치환**

`replaceAll()`은 기본적으로 **대소문자를 구분(case-sensitive) 합니다.**  
만약 **대소문자 구분 없이** 치환하고 싶다면 `i` 플래그를 사용하세요.

```js
const sentence = "Hello world, hello JavaScript";
const result = sentence.replaceAll(/hello/gi, "Hi");
console.log(result);
```

**출력**

```js
"Hi world, Hi JavaScript"
```

- `/hello/gi`
    - `g` (global): 모든 `"hello"`를 찾음
    - `i` (ignore case): 대소문자 구분 없이 찾음

---

## 🚀 **주의할 점**

- `replaceAll()`은 **ES2021(ES12)**부터 지원되므로 **구버전 브라우저에서는 사용할 수 없습니다**.
- **IE(Internet Explorer)에서는 작동하지 않습니다.**  
    (대신 `replace(/search/g, "replace")`을 사용해야 합니다.)

### **IE에서 호환되게 만들기**

```js
const str = "apple, banana, apple, grape";
const result = str.replace(/apple/g, "orange"); // `replaceAll()` 대신 사용
console.log(result);
```

---

## ✅ **정리**

|메서드|차이점|
|---|---|
|`replace("apple", "orange")`|**첫 번째** `"apple"`만 변경|
|`replaceAll("apple", "orange")`|**모든** `"apple"`을 변경|
|`replace(/apple/g, "orange")`|**모든** `"apple"`을 변경 (ES5에서도 사용 가능)|

💡 **즉, `replaceAll()`은 `replace()`와 다르게 문자열 내의 모든 일치 항목을 변경하는 기능을 합니다!** 🎯