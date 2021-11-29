import React from "react";

const Cart = (props) => {
    const style = (!props.products.isFound) ? {color:'#80808080' ,cursor:'pointer'}:{cursor:'pointer'}
    return (<i 
        style={style}
        onClick={()=>props.onAdd(props.products)} 
        className="fas fa-shopping-cart">
        </i>);
}
 
export default Cart;