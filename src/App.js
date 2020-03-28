import React from 'react';
import logo from './logo.svg';
import './App.css';

function Photo(props) {
  return (
    <img src={logo}
      className="photo"
      alt="stefan"
    />
  )
}

function EmployeeDetails(props) {
  return (
    <div className='employee-details'>
      <p className='employee-full-name'>{props.employee.name}</p>
      <p className='employee-position'>{props.employee.position}</p>
      <p className='employee-seniority'>{props.employee.seniority}</p>
    </div>
  )
}

function EmployeeCard(props) {
  return (
    <div className="employee-info">
      <Photo/>
      <EmployeeDetails employee={props.employee}/>
    </div>
  )
}

export default EmployeeCard;
