import { useState } from "react";

import "./App.css";
import { Form } from "./Form";

const App = () => {
  const [userForm, setUserForm] = useState([]);

  const handleForm = (data) => {
    setUserForm([...userForm, data]);
  };

  const handleClick = (index) => {
    const formUpdate = [...userForm]
    formUpdate.splice(index, 1)
    // edit formUpdate array to remove the selected item before storing in hook
    setUserForm([...formUpdate])
    // console.log(userForm)
  }

  return (
    <div className="wrapper">
      
      <Form handleForm={handleForm} />
      <ul>
      {userForm.map((item, index) => (
        <Address handleClick={() => handleClick(index)} key={index} address={item.address} />
      ))}
      </ul>
    </div>
  );
};

const Address = (props) => {
  return <li className="address" onClick={props.handleClick} >{props.address}</li>;
};

export default App;
