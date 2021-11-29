import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify'

import Menu from "./menu";
import Navbar from "./navBar";
import ShoppingCart from "./shoppingCart";
import Admin from "./adminPage";
import AddProduct from "./addProduct";

class App extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:3000/products/");
    // let res = await axios.get('http://localhost:27017/')
    console.log(res)
    this.setState({ products: res.data });

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(ahmed => ahmed.json())
    // .then(json => console.log(json))
  }

  addProduct = (product) => {
    let products = [...this.state.products];
    let index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isFound = !products[index].isFound;
    this.setState({ products });
  };

  handligDelete = async (product) => {
    let oldProducts = [...this.state.products];

    const newProducts = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products: newProducts });

    try {
      await axios.delete("http://localhost:3000/products/" + product.id);
    } catch (ex) {
      toast.info("can't delete");
      this.setState({ products: oldProducts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/addProduct/:id" component={AddProduct} />
          <Route
            path="/admin"
            render={(props) => (
              <Admin
                key={this.state.products.id}
                products={this.state.products}
                onDelete={this.handligDelete}
                {...props}
              />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <Menu
                key={this.state.products.id}
                products={this.state.products}
                {...props}
                onAdd={this.addProduct}
              />
            )}
          />
          <Route
            path="/cart"
            render={(props) => (
              <ShoppingCart
                products={this.state.products.filter((p) => p.isFound)}
                {...props}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
