import React, { Component } from 'react';
import Axios from 'axios';
import EmployeeInfo from './EmployeeInfo';
import '../styles/Employee.css'

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            invitation: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // e.preventDefault();
        // const invitation = { ...this.state.invitation };        

        // Axios({
        //     url: 'http://localhost:3333/invitations',
        //     data: invitation,
        //     method: 'POST'
        // })
        // .then(res => res.data)
        // .catch(err => alert('Unable to update invitation', err))
    }

    // get employee details
    componentDidMount() {
        Axios.get('http://localhost:3333/employee')
            .then(res => {
                this.setState({ data: res.data });
            });
        Axios.get('http://localhost:3333/invitations')
            .then(res => {
                this.setState({ invitation: res.data });
            });
    }

    render() {
        const employeeInfo = this.state.data;
        const invitation = this.state.invitation;
        const mergeInfo = (employeeInfo, invitation) =>
            employeeInfo.map(itm => ({
                ...invitation.find((item) => (item.id === itm.id) && item),
                ...itm
            }));

        const info = mergeInfo(employeeInfo, invitation);


        return (
            <form onSubmit={this.handleSubmit}>
                < div className="row" >
                    {(info.map(data => (
                        <EmployeeInfo key={data.id} {...data} />
                    )))}
                </div >
                <input type="submit" value="Submit" className="submitInfo" />
            </form >
        )
    }
}
