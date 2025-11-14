/* eslint-disable no-unused-vars */
import React from 'react';
import './child.css';
function Child() {
    const name = "Gift"
    let department = "Software Engineering"
    let matNo = "24/1191"
    let age= 18
    return (
        <div>
            <h1> Welcome to Child Component</h1>
            <p>My name is {name}</p>
            <p>I am in the department of {department}  </p>
            <p>My matric is {matNo}</p>
            <p>I am {age} years old</p>
            {age >=18? "Adult":"Child"}
            <img src="html.png" alt="girl" className="profile-pic"/>
        </div>
    )
}

export default Child;