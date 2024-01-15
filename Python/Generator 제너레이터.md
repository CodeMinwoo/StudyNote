
제너레이터는 [[Comprehension 컴프리헨션]] 문법 을 사용해서 생성할 수 있습니다

이를 제너레이터 표현식 ( generator expression ) 이라고 부릅니다

```python
 gen = ( x**2 for x in range(3) )

```

# Generator 제너레이터와 [[iterator 이터레이터]]와 다른점

* generator는 값을 넘겨주고 나면 값을 소비하고 더이상 기억하지 않습니다 즉 여러번 값을 가져올 수 없습니다
* 이터레이터는 전체 데이터를 한 번에 메모리에 로드해야 합니다
* 제너레이터는 필요한 순간에만 값을 생성하므로, 메모리 사용량이 효율적입니다
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

위에서 [[Comprehension 컴프리헨션]] 문법을 사용한 제너레이터 표현식으로 제너레이터를 만들어 봤습니다

파이썬에서는 제너레이터를 보다 유용하게 사용하기 위해, 함수 문법을 통해서도  생성할 수 있도록 지원합니다

함수안에서 yield 키워드를 사용하여, 요청에 대한 응답을 지정할 수 있습니다