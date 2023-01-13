import React from "react";
import { Contenedor, Title, Parrafo } from "./BoxStyled";

const Result = (props) => {
    const { firstName, lastName, email, password, confPassword } = props.data;
    return (
        <Contenedor>
            <Title>Your Form Data</Title>
            <Parrafo>First Name: {firstName}</Parrafo>
            <Parrafo>LastName: {lastName}</Parrafo>
            <Parrafo>Email: {email}</Parrafo>
            <Parrafo>Password: {password}</Parrafo>
            <Parrafo>Confirm Password:{confPassword}</Parrafo>
        </Contenedor>
    );
};

export default Result;
