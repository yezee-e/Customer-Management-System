## Management System

package.json script분석>

```json
{
  "name": "PRACTICE2",
  "version": "1.0.0",
  "scripts": {
    "client": "cd client && npm run start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  },
  "devDependencies": {
    "concurrently": "^4.1.2"
  }
}
```

client: 클라이언트 폴더에서 클라이언트 파일이 구동될 수 있도록 해줌
server: nodemon으로 서버가 server.js파일을 통해 구동될 수 있도록 해줌
dev: dev라는 명령어를 통해 node.js 서버와 리액트를 동시에 구동될 수 있도록 해준다

실행은 `npm run dev`를 터미널에 입력하면 동시에 서버를 돌릴 수 있다!
서버만 실행시키고 싶다면 `npm run server`를 터미널에 입력하면 node server.js이 구동된다

프론트는 localhost:3000에서 서버는 localhost:5000에서 개발하는데 설정을 해주지 않으면 통신 오류가 납니다.

> CORS -다른 출처의 자원을 공유
> cors는 추가 http헤더를 사용하여 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에
> 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 체제
> cors 문제를 해결하기 위해 주로 사용하는 방안은 proxy서버를 설정해서 해결하는 방법

3가지 방법을 소개해 드리도록 하겠습니다.

1. proxy 1 (개인적으로 추천)

2. proxy 2

3. cors 사용

**수동 프록시 설정**
확실하게 사용자를 정의해 줄 수 있는 방법ㅂ
라이브러리 설치가 필요하다
`npm add http-proxy-middleware`

리액트 프로젝트의 src폴더안에 `setupProxy.js`파일을 추가
파일내용은 아래와 같다

```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:서버에서 사용할 포트',
      changeOrigin: true,
    })
  );
};
```

setupProxy.js는 별도의 import를 할 필요없이 자동으로 실행
/api 부분을 바꿔 어떤 요청을 받으면 포트를 바꿔줄지 설정이 가능하다

**간단 프록시 설정**
단순히 리액트 프로젝트 폴더의 package.json에 다음을 추가해주면 된다
(인터넷 환경에 따라 안될때가 있다고 한다...)
`  "proxy": "http://localhost:서버에서 사용할 포트",`
get 요청을 할때 "/api/원하는 주소"로 하면 된다
단점은 /api를 써줘야한다

**cors 사용**
cors라이브러리를 이용하는 방법
모든 요청에 대해 허용할 수 있도록 해줌

`npm i cors` 모듈 설치

> var cors=require("cors")
> app.use(cors())
