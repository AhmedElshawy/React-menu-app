import React from "react";

const Edit = (props) => {
    
    return ( <i onClick={()=> props.history.push(`addProduct/${props.pr.id}`)} className="fas fa-edit"></i> );
}
 
export default Edit;