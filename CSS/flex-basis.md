- 기본 개념: flex-basis는 Flex 컨테이너 안에 있는 Flex 아이템의 초기 크기를 설정합니다. 주로 너비(가로 방향)나 높이(세로 방향)를 지정하는 데 사용됩니다.

동작 방식:

- flex-direction이 row일 때: flex-basis는 너비를 설정합니다.
- flex-direction이 column일 때: flex-basis는 높이를 설정합니다.

주의사항:

- flex-basis는 최소 크기를 보장하지 않습니다. 컨테이너가 작아지면 아이템도 작아질 수 있습니다.

우선순위:
    - flex-basis가 설정되어 있으면, 이 값이 width나 height보다 우선적으로 적용됩니다.

```css
.flex-item {
  width: 100px;
  flex-basis: 200px;
}
```

이 경우, flex-item의 초기 너비는 200px이 됩니다. width: 100px는 무시됩니다.