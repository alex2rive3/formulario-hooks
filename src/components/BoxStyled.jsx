import styled from "styled-components";

const BoxStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background-color: #c7c5c5;
    width: 95%;
    height: 50px;
`;
const Label = styled.label`
    flex: 2;
    text-align: left;
    margin-left: 5px;
`;
const Input = styled.input`
    flex: 4;
    padding: 3px;
    width: 92%;
    margin-right: 5px;
    border-radius: 14px;
    border: none;
`;
const Contenedor = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    text-align: center;
`;
const Parrafo = styled.p`
    margin: 10px 0px;
`;
export { BoxStyled, Label, Input, Contenedor, Title, Parrafo };
