import React, { Component } from 'react';
import axios from 'axios'

class AddProduct extends Component {
    
        
    state = { id:"", name:"" , price:"" }

    async componentDidMount(){
      let id = this.props.match.params.id;
      
      if (id !== 'new') {
        let res=await axios.get('http://localhost:3000/products/' +id)
        let state ={...this.state}
        state.name =res.data.name
        state.price =res.data.price
        state.id =res.data.id
        this.setState(state)
      }
      
    }

    handelSubmit = async(e)=>{
      e.preventDefault()
      //calling backend server
      if (this.props.match.params.id==='new') {
        let obj = { ...this.state , count:0 , isFound:false}
        await axios.post('http://localhost:3000/products/' , obj)
      }else{
        let obj = {...this.state , count:0 , isFound:false}
        delete obj.id
        await axios.put('http://localhost:3000/products/' +this.state.id ,obj)

      }
      

      this.props.history.replace('/admin')

    }


    handelChange =(e)=>{
      let state = {...this.state}
      state[e.currentTarget.name] = e.currentTarget.value
      this.setState(state)
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className='m-4'> {this.props.match.params.id==='new'? "Add new Product" : "Edit Product" }</h1>
            <form className="m-5">
              <div className="mb-3 form-group">
                <label htmlFor="username" className="form-label">
                  Name
                </label>
                <input
                value={this.state.name}
                onChange={this.handelChange}
                name='name'
                type="text"
                className="form-control"
                id="username"
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="password" className="form-label">
                  Price
                </label>
                <input
                value={this.state.price}
                onChange={this.handelChange}
                name='price'
                type="text"
                className="form-control"
                id="password"
                />
              </div>
              <button onClick={this.handelSubmit} type="submit" className="btn btn-primary">
                {this.props.match.params.id==='new'? 'Add' : 'Edit'}
              </button>
            </form>
          </React.Fragment>
        );
    }
}
 
export default AddProduct;