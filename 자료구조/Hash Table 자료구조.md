Hash Table 구조는 자바스크립트의 객체 구조 입니다
Key, Value 로 이루어져 있습니다

# 쓰는 이유

Hash Table 은 검색 알고리즘에서 보통 O(1) 의 시간 복잡도를 갖게 됩니다. 즉 엄청나게 빠르게 검색할 수 있는 방법 입니다.

# 원리

Hash Table도 사실 Array 의 구조로 되어 있지만 Array에서 index 값을 입력하면 그 값이 바로 나오는 것 처럼 해시 함수를 이용해서 key 에 대한 value 값을 찾기 때문에 O(1) 의 시간 복잡도를 가질 수 있습니다

# Hash Collision 해시 충돌

[[Hash Function 해시 함수]] 를 통해서 배열의 index값을 얻게 되는데 가끔 서로 다른 두 key 값이 해시 함수를 통해서 같은 index를 가지게 될 수 있습니다

이때에는 해당하는 index 안에 두개의 value를 모두 저장합니다. 그리고 value 안에서 Linear Search 순차 검색을 합니다.