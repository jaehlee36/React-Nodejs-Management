import React from 'react';

class Customer extends React.Component {
    
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
}
const CustomerProfile = (props) => {
    return (
        <div>
            <img src={props.image} alt='profile'></img>
            <h2>{props.name}(id: {props.id})</h2>
        </div>
    );
}
const CustomerInfo = (props) => {
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}
export default Customer;