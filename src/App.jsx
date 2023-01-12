import React, { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Result from "./components/Result";
function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: "",
    });
    return (
        <div className="App">
            <UserForm inputs={state} setInputs={setState} />
            <Result data={state} />
        </div>
    );
}
export default App;
