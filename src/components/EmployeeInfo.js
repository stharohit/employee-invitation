import React from 'react';
import '../styles/EmployeeInfo.css';
import Counter from './Counter';

const EmployeeInfo = param => { 
    return (
        <div className="employeeCard">
            <div className="employeeDetails">
                <ul>
                    <li>
                        <h3>{param.employee_name}</h3>
                    </li>
                    <li>
                        <span><strong>Salary: $</strong> {param.employee_salary}</span>
                    </li>
                    <li>
                        <span><strong>Age: </strong> {param.employee_age} years</span>
                    </li>
                </ul>
                <Counter id={param.id} count={(param.invitation_per)? param.invitation_per : 0} />
            </div>
        </div>
    );
}

export default EmployeeInfo;
