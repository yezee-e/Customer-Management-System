import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper, //스타일을 주기 위해 외부를 감싸는 역할
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import './App.css';
import Customer from './components/Customer';

const useStyles = makeStyles({
  //전체적용
  root: {
    width: '100%',
    marginTop: '30px', //탑여백을 3의 가중치 만큼 준다?
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080, //가로 테이블이 무조건 이 크기이기 때문에 화면을 줄이면 가로 스크롤바가 생긴다
  },
});

const customers = [
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
];

function App() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;

//material-UI
//설치: npm install @mui/material @emotion/react @emotion/styled
