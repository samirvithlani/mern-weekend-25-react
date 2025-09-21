import React from "react";

export const MapDemo2 = () => {
  var users = [
    { id: 1, name: "ajay", age: 23, gender: "male" },
    { id: 2, name: "seeta", age: 25, gender: "female" },
    { id: 3, name: "parth", age: 24, gender: "male" },
    { id: 4, name: "arjun", age: 26, gender: "male" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 2</h1>
      {
        users.map((user)=>{
            return <h1>{user.id} - {user.name} {user.age}</h1>
        })
      }
    </div>
  );
};
