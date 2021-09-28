import { useState } from "react";

export const Form = ({ handleForm }) => {
  const [address, setaddress] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({
      address,
    });
    setaddress("")
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input value={address} func={setaddress} label="To Do input     " name="address" />
      

      <button className="button" type="submit">Submit</button>
    </form>
  );
};

const Input = ({ value, func, name, label }) => {
  return (
    <>
      <label className="label" htmlFor={name}>{label}:</label>
      <input className="input"
        name={name}
        type="text"
        onChange={(e) => func(e.target.value)}
        value={value}
      />
    </>
  );
};
