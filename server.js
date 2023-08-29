const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: '../public/pic/fox.png',
      name: '홍길동',
      birthday: 19961212,
      gender: '남자',
      job: '대학생',
    },
    {
      id: 2,
      image: '../public/pic/fox.png',
      name: '김춘식',
      birthday: 19860815,
      gender: '남자',
      job: '프로그래머',
    },
    {
      id: 3,
      image: '../public/pic/fox.png',
      name: '이예진',
      birthday: 20040719,
      gender: '여자',
      job: '요리사',
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//bodyParser
//HTTPpost put 요청시 request body 에 들어오는 데이터값을 읽을 수 있는 구문으로 파싱함과 동시에
//req.body 로 입력해주어 응답 과정에서 요청에 body 프로퍼티를 새로이 쓸 수 있게 해주는 미들웨어
