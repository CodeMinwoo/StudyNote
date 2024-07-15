CSS로 표현하면 'flex: 0 0 auto'와 동일합니다.

- Flexbox 배치:
    - flex-none을 적용한 요소도 여전히 Flexbox 컨테이너 내의 flex 아이템으로 취급됩니다.
    - 요소는 Flexbox의 주축(main axis)과 교차축(cross axis)을 따라 배치됩니다.
- 크기 조정:
    - flex-none의 주요 역할은 요소의 크기 조정을 제한하는 것입니다.
    - 요소의 크기는 그 내용이나 명시적으로 설정된 width/height에 따라 결정되며, 컨테이너의 크기 변화에 반응하여 늘어나거나 줄어들지 않습니다.
- 다른 Flex 속성과의 상호작용:
    - justify-content, align-items 등의 Flexbox 정렬 속성은 여전히 flex-none 요소에 적용됩니다.
    - flex-wrap 속성이 적용된 경우, flex-none 요소도 필요에 따라 새 줄로 넘어갈 수 있습니다.