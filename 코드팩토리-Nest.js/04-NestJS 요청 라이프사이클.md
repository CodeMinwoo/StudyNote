![](https://i.imgur.com/CSEYfie.png)

- **미들웨어**: 애플리케이션 전역에서 요청과 응답을 처리하는 첫 번째 단계로, 공통 기능을 수행합니다.
- **가드**: 사용자의 인증 상태나 권한을 확인하여, 요청이 허용될지 결정합니다.
- **인터셉터**: 요청이나 응답을 가로채어, 추가적인 로직을 실행하거나 데이터를 변환합니다.
- **파이프**: 들어오는 데이터를 검증하고 필요한 형식으로 변환하여, 컨트롤러가 신뢰할 수 있는 데이터를 받도록 합니다.


* @nestjs/common 에서 Get, Post , Patch , Delete 가져와서 사용
* @Controller annotation에 prefix 넣어서 사용한다
* @Param()으로 path parameter 가져와서 사용한다.

