import React from "react";

export const Mapdemo5 = () => {
  var products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 599,
      qty: 2,
      color: "Black",
      stock: 120,
      status: true,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      price: 1499,
      qty: 1,
      color: "Blue",
      stock: 45,
      status: true,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 299,
      qty: 3,
      color: "Red",
      stock: 200,
      status: true,
      category: "Home & Kitchen",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 2499,
      qty: 1,
      color: "Red",
      stock: 15,
      status: false,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 1999,
      qty: 2,
      color: "White",
      stock: 60,
      status: true,
      category: "Fashion",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 5</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>COLOR</th>
            <th>STOCK</th>
            <th>STATUS</th>
            <th>CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td style={{color:prod.price>2000 && "red"}}>{prod.price}
                    {prod.price<500 && "-cheap" }
                </td>
                <td>{prod.qty}</td>
                <td style={{color:prod.color}}>{prod.color}</td>
                <td style={{color:prod.stock<=50 && "blue"}}>{prod.stock}</td>
                <td>{prod.status== true ?"true":"false"}</td>
                <td>{prod.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
