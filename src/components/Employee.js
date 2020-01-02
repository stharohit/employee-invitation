import React, {Component} from 'react';
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
        this.addInvitation = this.addInvitation.bind(this);
    }

    addInvitation(inv) {
        if(this.state.invitation.length === 0) {
            this.setState({ invitation: [...this.state.invitation, inv] });
        } else {
            const invi = this.state.invitation.map(i => (inv.id === i.id)? {...i, ...inv} : {inv} );
                this.setState({
                    invitation: invi
                })
            console.log(this.state.invitation);
            
        }
    }

    // get employee details
    componentDidMount() {
        Axios.get('http://localhost:3333/employee')
            .then(res => {
                this.setState({data: res.data});
            });
    }

    render() {
        const employeeInfo = this.state.data;
        return (
            <form>
                < div className="row" >
                    {(employeeInfo.map(data => (
                        <EmployeeInfo key={data.id} {...data} addInvitation={this.addInvitation}/>
                    )))}
                </div >
                <input type="submit" value="Submit" className="submitInfo" />
            </form >
        )
    }
}
