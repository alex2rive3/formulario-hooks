import React from "react";

const Result = (props) => {
    const { firstName, lastName, email, password, confPassword } = props.data;
    return (
        <div>
            <h1>Result</h1>
            <p>First Name: {firstName}</p>
            <p>LastName: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password:{confPassword}</p>
        </div>
    );
};

export default Result;
