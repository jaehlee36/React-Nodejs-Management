import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'

/* class Customer extends React.Component {
    
    render() {
        return (
            <div>
                <CustomerProfile
                    name={this.props.name}
                    id={this.props.id}
                    image={this.props.image}>
                </CustomerProfile>
                <CustomerInfo
                    birthday={this.props.birthday}
                    gender={this.props.gender}
                    job={this.props.job}>
                </CustomerInfo>
            </div>
        );
    }
} */

const Customer = (props) => {
    return (
         <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"></img></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    )
}

// const CustomerProfile = (props) => {
//     return (
//         <div>
//             <img src={props.image} alt='profile'></img>
//             <h2>{props.name}(id: {props.id})</h2>
//         </div>
//     );
// }
// const CustomerInfo = (props) => {
//     return (
//         <div>
//             <p>{props.birthday}</p>
//             <p>{props.gender}</p>
//             <p>{props.job}</p>
//         </div>
//     );
// }
export default Customer;