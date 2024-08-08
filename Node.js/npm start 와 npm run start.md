### 기본 NPM 스크립트 vs 사용자 정의 스크립트

NPM에는 몇 가지 기본적으로 제공되는 스크립트가 있습니다. 예를 들어, `npm start`, `npm test`, `npm stop` 등이 있습니다. 이 스크립트들은 `run`을 붙이지 않고도 실행할 수 있습니다

### 사용자 정의 스크립트

사용자가 `package.json` 파일의 `scripts` 섹션에 정의한 스크립트는 `run` 명령어를 사용해야 합니다. 예를 들어, `package.json`에 다음과 같이 정의된 스크립트가 있다고 가정해봅시다 . 


# npm start 명령어

`npm start` 명령어를 실행하면 `package.json` 파일의 `scripts` 섹션에 정의된 `start` 스크립트가 실행됩니다. ( npm run start 와 동일 )

만약 `package.json` 파일에 `start` 스크립트가 정의되지 않은 경우, `npm start`를 실행하면 기본적으로 `node server.js`를 실행하려고 시도합니다. 만약 `server.js` 파일이 존재하지 않는다면 에러가 발생합니다. 