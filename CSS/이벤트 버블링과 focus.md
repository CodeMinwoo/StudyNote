
focus 는 이벤트 버블링되지 않는다

![](https://i.imgur.com/7OO4pys.png)

버튼을 눌렀을 때 input에 focus 를 주려면 아래의 속성을 추가한다
```html
pointer-events-none
```

```html
<div class="relative m-10 border">

<span class="absolute left-2 top-2">

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">

<path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z" />

</svg>

</span>

<input class="w-[150px] rounded-md border py-1 pl-8 outline-none" type="text" />

</div>
```