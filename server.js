const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'hello express!!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//bodyParser
//HTTPpost put 요청시 request body 에 들어오는 데이터값을 읽을 수 있는 구문으로 파싱함과 동시에
//req.body 로 입력해주어 응답 과정에서 요청에 body 프로퍼티를 새로이 쓸 수 있게 해주는 미들웨어
