
제너레이터는 [[Comprehension 컴프리헨션]] 문법 을 사용해서 생성할 수 있습니다

이를 제너레이터 표현식 ( generator expression ) 이라고 부릅니다

```python
 gen = ( x**2 for x in range(3) )

```

# Generator 제너레이터와 iterable 객체와 다른점

* generator는 값을 넘겨주고 나면 값을 소비하고 더이상 기억하지 않습니다 즉 여러번 값을 가져올 수 없습니다


## next() 함수

제너레이터가 가지고 있는 값을 하나씩 사용할 수 있습니다

```python
gen = (x** 2 for x in range(3))

next(gen)
>>> 0
next(gen)
>>> 1
next(gen)
>>> 4
next(gen)
>>> StopIteration
```

# yield
