import React from "react";

const UserForm = (props) => {
    const { inputs, setInputs } = props;
    const cargar = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <form>
            <div>
                <label>First Name: </label>
                <input name="firstName" onChange={cargar} type="text" />
            </div>
            <div>
                <label>Last Name: </label>
                <input name="lastName" onChange={cargar} type="text" />
            </div>
            <div>
                <label>Email: </label>
                <input name="email" onChange={cargar} type="email" />
            </div>
            <div>
                <label>Password: </label>
                <input name="password" onChange={cargar} type="password" />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input name="confPassword" onChange={cargar} type="password" />
            </div>
        </form>
    );
};

export default UserForm;
