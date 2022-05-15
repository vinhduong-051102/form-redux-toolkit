import React, { useState } from "react";
import { Button } from "antd";
import Input from "./components/Input";


const FormRegister = () => {
  const initState = {
    email: "",
    password: "",
    userName: "",
    telephone: "",
    address: "",
  };
  const [inputValues, setInputValues] = useState(initState);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.getAttribute("name")) {
      const name = e.target.getAttribute("name") as string;
      setInputValues((prev) => {
        return { ...prev, [name]: e.target.value };
      });
    }
  };
  const handleClick = () => {
    
  }
  return (
    <div className="container-fluid">
      <form action="/action_page.php">
        <Input
          placeholder="Enter email"
          type="email"
          name="email"
          value={inputValues.email}
          action={handleInput}
        />
        <Input
          placeholder="Enter telephone"
          name="telephone"
          value={inputValues.telephone}
          action={handleInput}
        />
        <Input
          placeholder="Enter address"
          name="address"
          value={inputValues.address}
          action={handleInput}
        />
        <Input
          placeholder="Enter user name"
          name="userName"
          value={inputValues.userName}
          action={handleInput}
        />
        <Input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={inputValues.password}
          action={handleInput}
        />
        <div className="form-check mb-3"></div>
        <div className="mb-3 mt-3">
          <Button type='primary' size='large' shape='round' onClick={handleClick}>
            Submit
          </Button>
          
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
