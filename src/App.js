import Customer from './components/Customer'

const customers = [
  {
  id: 1,
  image: "https://placeimg.com/64/64/1",
  name: '홍길동',
  birthday: '920304',
  gender: '남자',
  job: '대학생',
  },
  {
  id: 2,
  image: "https://placeimg.com/64/64/2",
  name: '홍길동2',
  birthday: '9203042',
  gender: '남자2',
  job: '대학생2',
  },
  {
  id: 3,
  image: "https://placeimg.com/64/64/3",
  name: '홍길동3',
  birthday: '9203043',
  gender: '남자3',
  job: '대학생3',
  },
]
function App() {
  return (
    <div className="App">
      {
        customers.map(a => {
          return (
            <Customer
              key={a.id}
              id={a.id}
              image={a.image}
              name={a.name}
              birthday={a.birthday}
              gender={a.gender}
              job={a.job}
            >
            </Customer>
          )
        })
      }
{/* 
      <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer 
        id={customers[1].id}
        image={customers[2].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      /> */}
    </div>
  );
}

export default App;
