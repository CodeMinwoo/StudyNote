
# 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된 '  파일 ' 입니다

# 각 모듈은 자신만의 [[Scope 스코프]]를 가지고 있어서 모듈 내에서 선언된 변수나 함수는 해당 모듈 내에서만 유효합니다

#### ** 중요

모듈은 프로그램 메모리의 다른 영역에 저장되며, 그 모듈 내의 함수가 호출되면 그때 해당 함수의 실행 컨텍스트가 생성되어 콜 스택에 쌓입니다.

함수의 실행 컨텍스트는 그 함수가 호출될 때 생성되며, 이 컨텍스트는 함수의 매개변수, 지역 변수, this 바인딩, 반환 주소 등 함수 실행에 필요한 모든 정보를 담고 있습니다. 이렇게 생성된 실행 컨텍스트는 콜 스택에 쌓이고, 함수가 종료되면 그 실행 컨텍스트는 콜 스택에서 제거됩니다.

그러나 모듈의 코드 자체는 메모리에 계속 남아있으므로, 같은 모듈의 함수를 다시 호출하면 다시 새로운 실행 컨텍스트가 생성되어 콜 스택에 쌓입니다. 이렇게 모듈은 한 번 메모리에 로드되면 계속 재사용될 수 있습니다.

따라서, 모듈을 import하는 것은 그 모듈의 코드를 메모리에 로드하는 것이고, 함수를 호출하는 것은 그 함수의 실행 컨텍스트를 생성하고 콜 스택에 쌓는 것입니다. 이 두 가지는 서로 다른 과정으로 이해하시면 됩니다.