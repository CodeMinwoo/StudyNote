# 주된 차이점은  Sort() 가 원본 리스트를 직접 변경하고 반환 값이 없는 반면에 Sorted() 는 새로운 리스트를 반환하고 원본 리스트는 변경되지 않는다는 것입니다

# .Sort()

리스트 객체의 메소드로, 해당 리스트의 요소를 정렬하여 변경합니다

```python
my_list = [3,1,4,1,5,9,2]
my_list.sort()

print(my_list) 

# 출력 : [1,1,2,3,4,5,9]
```

# Sorted()

파이썬의 내장 함수로, iterable 한 객체 (리스트, 문자열 등) 의 정렬된 새로운 복사본을 반환합니다

```python
my_list = [3,1,4,1,5,9,2]
new_list = sorted(my_list)

print(new_list) # 출력 : [1,1,2,3,4,5,9]
print(my_list) # 출력 : [3,1,4,1,5,9,2]
```

