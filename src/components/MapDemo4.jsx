import React from "react";

export const MapDemo4 = () => {
  var employees = [
    {
      id: 1,
      name: "ram",
      age: 26,
      salary: 34000,
      city: "ahmedabad",
      gender: "male",
    },
    {
      id: 2,
      name: "seeta",
      age: 24,
      salary: 32000,
      city: "ahmedabad",
      gender: "female",
    },
    {
      id: 1,
      name: "sukanya",
      age: 26,
      salary: 38000,
      city: "mumbai",
      gender: "female",
    },
    {
      id: 1,
      name: "arjun",
      age: 23,
      salary: 30000,
      city: "pune",
      gender: "male",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 4</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>CITY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr style={{backgroundColor:emp.gender == "female" && "pink"}}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td style={{color:emp.age<25 ? "red":"black"}}>{emp.age}</td>
                {/* <td style={{backgroundColor:emp.salary>35000 ? "lightblue":"white"}}>{emp.salary}</td> */}
                <td style={{backgroundColor:emp.salary>35000 && "lightblue"}}>{emp.salary}</td>
                <td style={{backgroundColor:emp.city=="mumbai" && "gold"}}>{emp.city}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
