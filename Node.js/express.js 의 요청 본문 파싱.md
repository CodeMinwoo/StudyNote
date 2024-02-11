Express.js에서는 'req.body' 를 사용하여 HTTP 요청의 본문에 있는 데이터에 접근합니다 하지만 Express.js는 요청의 본문을 파싱해주는 기능을 갖고 있지 않습니다 

따라서 별도의 body-parser 미들웨어를 사용하여 요청의 본문을 파싱하고 데이터에 접근합니다

```js

app.use(express.json());
app.use(express.urlencoded({extended : true }));

```


#### { extended : true } 의 의미

예를 들어, `name=John&age=30`와 같은 URL 인코딩된 데이터를 파싱할 때:

- `extended: true`로 설정된 경우:
    - `{ name: 'John', age: '30' }`와 같은 객체 형태로 파싱됩니다.
- `extended: false`로 설정된 경우:
    - `{ 'name': ['John'], 'age': ['30'] }`와 같이 각 값이 배열 형태로 파싱됩니다.

일반적으로는 `extended: true`를 사용하는 것이 더 편리하며, 따라서 기본값으로 설정되어 있습니다
