
제너레이터는 [[Comprehension 컴프리헨션]] 문법 을 사용해서 생성할 수 있습니다

이를 제너레이터 표현식 ( generator expression ) 이라고 부릅니다

```python
 gen = ( x**2 for x in range(3) )

```

# Generator 제너레이터와 [[iterator 이터레이터]]와 다른점

#### 제너레이터는 이터레이터를 생성하기 위한 특별한 종류의 함수입니다
#### 이터레이터와 제너이터 모두 순회 가능한 객체를 만들어주는 도구입니다

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

```python
def my_gen():
	yield 1
	yield 2
	yield 3
```

```python
gen = my_gen()
print(next(gen))
--> 1

```

함수 안에서 for 문과 yield를 사용해서 제너레이터를 생성할 수도 있습니다

```python
def my_gen2():
	for i in range(3):
		yield i


gen = my_gen2()
print(next(gen))
# 출력결과 : 0 
print(next(gen)) 
# 출력결과 : 1
print(next(gen)) 
# 출력결과 : 2 
print(next(gen)) 
# 에러발생 : StopIteration
```

####  함수 안에 yield 키워드가 존재한다면, 함수의 실행결과는 항상 generator입니다

```python
def test():
      if False:
          yield None

```

절대 실행되지 않고, 의미없는 yield 키워드 일지라도, 함수의 실행 결과는 generator입니다

#### yield를 통해 generator를 생성할 때, return  키워드 대신 yield 를 통해서 값을 리턴했습니다 대신 기존에 return 구문이 실행되면 제너레이터가 종료됩니다 그리고 출력할 메세지를 지정할 수 있습니다

```python
def my_gen():
     for i in range(100):
          if i == 3:
              return '그만합시다.'
          yield i

gen = my_gen()
print(next(gen))
print(next(gen))
print(next(gen))
print(next(gen))

```

#### 결과

```python
0
1
2
StopIteration: 그만합시다.

```