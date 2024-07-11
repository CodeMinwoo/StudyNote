::before와 ::after는 매우 유용한 CSS 기능으로, 디자인의 유연성을 크게 높여줍니다. 그러나 이들은 순수하게 표현을 위한 것이므로, 중요한 콘텐츠나 의미 있는 정보를 전달하는 데에는 사용하지 않는 것이 좋습니다.

::before와 ::after는 의사 요소(pseudo-elements)로, HTML 요소의 내용 앞이나 뒤에 콘텐츠를 추가할 때 사용됩니다. 이들은 실제 HTML 구조를 변경하지 않고도 시각적 요소를 추가할 수 있게 해줍니다.

```jsx
<ul class="space-y-2">

<li class="before:content-['😟'] before:mr-2 before:text-green-500">

완료된 항목

</li>

<li class="before:content-['\2713'] before:mr-2 before:text-green-500">

완료된 항목

</li>

<li class="before:content-['\2717'] before:mr-2 before:text-red-500">

미완료 항목

</li>

</ul>
```
