import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Edit from "./edit";

class Admin extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1>Admin panal</h1>

        <button
          onClick={() => this.props.history.push("/addProduct/new")}
          className="btn btn-danger m-3"
        >
          Add
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <Edit pr={p} {...this.props} />
                </td>
                <td>
                  <i
                    onClick={() => this.props.onDelete(p)}
                    className="fas fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Admin;
