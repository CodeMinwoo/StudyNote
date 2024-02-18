Math.floor() 함수는 무조건 내림인  반면 Math.trunc() 함수는 소수점 삭제 입니다

따라서 음수의 소수점 삭제 시 차이가 생깁니다

- `Math.floor()`에 의한 양수 처리: `1.7` → `1`
- `Math.floor()`에 의한 음수 처리: `-1.7` → `-2`
- `Math.trunc()` (Python에서는 `int()` 사용)에 의한 양수 처리: `1.7` → `1`
- `Math.trunc()` (Python에서는 `int()` 사용)에 의한 음수 처리: `-1.7` → `-1`