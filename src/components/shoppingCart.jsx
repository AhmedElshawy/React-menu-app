import React from "react";

const ShoppingCart = (props) => {
  return (
    <React.Fragment>
      <h1>My shopping cart</h1>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((p) => (
            <tr key={p.id}>
              <th scope="row">{p.id}</th>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ShoppingCart;
