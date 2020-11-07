import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})
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
function App(props) {
  const {classes} = props;

  return ( 
    <Paper className={classes.root}>
      <Table className= {classes.table}>
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
        </TableBody>
      </Table>


      
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
    </Paper>
  );
}

export default withStyles(styles)(App);
