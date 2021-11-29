import React ,{Component} from "react";
import Cart from "./cart";



class Menu extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1>Our Menu</h1>
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
          {this.props.products.map((p)=> (
            <tr key={p.id}>
              <th scope="row">{p.id}</th>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td> 
                <Cart
                products ={p}
                onAdd={this.props.onAdd}
                />
              </td>
            </tr>
          ))}
          </tbody>
          </table>
      </React.Fragment>
    );
  }
}

export default Menu;


// {/* <i onClick={()=>this.props.onAdd(p)} className="fas fa-shopping-cart"></i> */}
