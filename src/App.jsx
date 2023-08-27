import './App.css';
import Customer from './components/Customer';

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
  return (
    <div className='gray-background'>
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
    </div>
  );
}

export default App;
