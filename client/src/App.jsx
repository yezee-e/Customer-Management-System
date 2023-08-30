import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper, //스타일을 주기 위해 외부를 감싸는 역할
  CircularProgress, //api 로딩처리 구현
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import './App.css';
import Customer from './components/Customer';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  //전체적용
  root: {
    width: '100%',
    marginTop: '30px',
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080, //가로 테이블이 무조건 이 크기이기 때문에 화면을 줄이면 가로 스크롤바가 생긴다
  },
});

function App() {
  const classes = useStyles();
  const [serverData, setServerData] = useState([]);
  const [progress, setProgress] = useState(0); //api로딩처리 관리

  const fetchData = async () => {
    await fetch(`http://localhost:5000/api/customers`)
      .then((res) => res.json())
      .then((data) => {
        setServerData(data);
      });
  };

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper className={classes.root}>
      {serverData ? (
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
            {serverData.map((customer) => (
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
      ) : (
        <TableRow>
          <TableCell colSpan={6} align='center'>
            <CircularProgress variant='determinate' value={progress} />
          </TableCell>
        </TableRow>
      )}
    </Paper>
  );
}

export default App;

//material-UI
//설치: npm install @mui/material @emotion/react @emotion/styled
