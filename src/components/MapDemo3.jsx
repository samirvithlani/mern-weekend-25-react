import React from "react";

export const MapDemo3 = () => {
  var users = [
    { id: 1, name: "ajay", age: 23, gender: "male" },
    { id: 2, name: "seeta", age: 25, gender: "female" },
    { id: 3, name: "parth", age: 24, gender: "male" },
    { id: 4, name: "arjun", age: 26, gender: "male" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 3</h1>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  );
};
