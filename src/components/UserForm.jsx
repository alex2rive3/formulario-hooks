import React from "react";
import { BoxStyled, Label, Input } from "./BoxStyled";

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
            <BoxStyled>
                <Label>First Name: </Label>
                <Input name="firstName" onChange={cargar} type="text" />
            </BoxStyled>
            <BoxStyled>
                <Label>Last Name: </Label>
                <Input name="lastName" onChange={cargar} type="text" />
            </BoxStyled>
            <BoxStyled>
                <Label>Email: </Label>
                <Input name="email" onChange={cargar} type="email" />
            </BoxStyled>
            <BoxStyled>
                <Label>Password: </Label>
                <Input name="password" onChange={cargar} type="password" />
            </BoxStyled>
            <BoxStyled>
                <Label>Confirm Password: </Label>
                <Input name="confPassword" onChange={cargar} type="password" />
            </BoxStyled>
        </form>
    );
};

export default UserForm;
