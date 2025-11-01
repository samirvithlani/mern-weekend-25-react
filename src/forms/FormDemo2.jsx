import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const { register, handleSubmit } = useForm();
  const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false)
  //handleSubmit function:
  //register // object function..
  const submitHandler = (data) => {
    console.log(data);
    setoutput(data);
    setisSubbmited(true)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label>
          MALE:{" "}
          <input type="radio" {...register("gender")} value="male"></input>{" "}
          <br></br>
          FEMALE:{" "}
          <input type="radio" {...register("gender")} value="female"></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>

{
    isSubbmited == true && <div>
        <h1>OUTPUT</h1>
        <h2>NAME = {output.name}</h2>
        <h3>Age = {output.age}</h3>
      </div>
}
      
    </div>
  );
};
