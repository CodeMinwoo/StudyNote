한줄요약 :
	
	편해서 씁니다

axios의 get 요청
```js
axios.get('/api/users')
	.then(response => { 
	// 응답 데이터 처리
	console.log(response.data);
	}) 
	.catch(error => {
	// 에러 처리
	console.error(error);
	});
```

fetch의 get요청
** 별도로 method 를 지정하지 않으면 GET이 기본값으로 사용됩니다
```js
fetch('api/Users')
	.then(response => response.json())
	.then(data => {
		// 응답 데이터 처리
		console.log(data)
	})
	.catch(err=>{
		//에러 처리
		console.log(err);
	})
```

axios의 post 요청
```js
axios.post('/api/users', { name : "minwoo", age : '29'})
	.then(response => {
		//응답 처리
		console.log(response.data)
	})
	.catch(err=>{
		//에러 처리
		console.log(err)
	})
```

** async / await으로 보내는 방식

```js
async function postData() {
  try {
    const response = await axios.post('/api/users', { name: 'minwoo', age: 29 });
    // 응답 데이터 처리
    console.log(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
  }
}

// 함수 호출
postData();

```

fetch의 post 요청
```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 25
  })
})
  .then(response => response.json())
  .then(data => {
    // 응답 데이터 처리
    console.log(data);
  })
  .catch(error => {
    // 에러 처리
    console.error(error);
  });

```

# axios 에서 header를 추가하려면

```js
async function postData() {
  try {
    const response = await axios.post('/api/users', {
      name: 'John',
      age: 25
    }, {
      headers: {
        'Content-Type': 'application/json'
        // 다른 헤더 설정도 가능
        // 'Authorization': 'Bearer TOKEN'
      }
    });

    // 응답 데이터 처리
    console.log(response.data);
  } catch (error) {
    // 에러 처리
    console.error(error);
  }
}

// 함수 호출
postData();

```