# Path parameter

```js
	http://naver.com/stocks
	http://naver.com/blog
```

# Query Parameter
```js
	/products?price=3000
	/products?ordering=-id
	/products?offset=0&limit=100
	/products?search=홍길동
```

#### 동일한 키값으로 여러 값을 전달할 경우, 서버에서는 배열로 값을 받을 수 있습니다

```js
/products?size=230&size=240&size=280

---> {size : [230,240,280]}
```


# 차이점

접근하는 고유한 정보를 변수화 하여 지정해둔 매개변수를 path Parameter라고 합니다 유일한 값을 식별하는 역할을 합니다

유일 값을 식별하기 위한 용도가 아닌 옵션을 줄 때 사용하는 것은 Query Parameter 입니다

** 옵션에는 필터링, 정렬, 페이지네이션, 검색 등의 경우가 있습니다